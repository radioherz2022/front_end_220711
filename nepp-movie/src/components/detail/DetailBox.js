import styled, { css } from "styled-components";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getDetail } from "../../custom-axios";
import Loading from "../common/Loading";

// usdParams 데이터 주소 가지고 오기(영화상세정보 데이터 가지올 것)
// /movie/:id => /movie/123
// => useParams() => {name :123}
// /moive?name = id&password=1234

export default function DetailBox(){
    // 숫자 id더라도 string으로 넘어온다
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {pathname} = useLocation();

    const {title, name, release_date, first_air_date, overview, poster_path, backdrop_path} = data;

    // ?. 옵셔널 체이닝 : ?. 앞에 값이 undefined와 null 아닐 경우에만 참조
    // console.log({}.data?.age)

    useEffect(() => {
        const fetchData = async () => {
            let {data} = await getDetail(pathname);
            setData(data);
            setIsLoading(false);
        }
        fetchData();
    },[pathname]);

    const imgUrl = `http://image.tmdb.org/t/p/w300${poster_path}`;
    const backdropUrl = `http://image.tmdb.org/t/p/w1280${backdrop_path}`;

    if (isLoading) return <Loading/> 

    return(
    <Block backdropUrl={backdropUrl} isLoading={isLoading}>
        <Backdrop/>
        <ImgBox>
        <img src={imgUrl} alt="" /></ImgBox>
        <ContentBox>
            <TitleBox>
                <h3>{title || name}</h3>
                <span>({release_date?.substr(0,4) || first_air_date?.substr(0,4)})</span>
            </TitleBox>
            <Summary>개요</Summary>            
            <DescText>
                {overview || "개요없음"}
            </DescText>
        </ContentBox>

    </Block>
        )
}

const Block = styled.div`
    display: flex;
    align-items: center;
    padding:20px;
    ${({backdropUrl})=> css`
    background-image: url(${backdropUrl}) ;
    filter:grayscale(80%);
    `}
    background-size: cover;
    background-repeat: no-repeat;
    color:#fff;
    position: relative;
    
`
const Backdrop = styled.div`
    position: absolute;
    // 이미지 덮어씌우는 것은 absolute쓰고
    // 다만 그 아래 이미지는 relative로 정해야 함
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    backdrop-filter: blur(2px);
    top:0;
    left:0;
`

const ImgBox = styled.div`
    flex-shrink: 0;
    width: 300px;
    height: 450px;
    overflow: hidden;
    img{
        height: 100%;
    }
    z-index: 100;
`

const TitleBox = styled.div`
    display:flex;
    align-items: flex-end;
    margin-bottom: 40px;
    h3{
        font-size: 2em;
        font-weight: 700;
    }
    span{
        font-size: 1.6em;
    }

`

const ContentBox = styled.div`
    z-index: 100;
    margin-left: 20px;
`

const DescText = styled.p`
    line-height:1.5em;
`

const Summary = styled.h4`
    margin-bottom:10px; 
    font-size:1.2em; 
    font-weight:700;
`