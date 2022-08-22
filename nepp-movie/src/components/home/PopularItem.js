import styled from "styled-components";
import {Link} from 'react-router-dom'

export default function PopularItem({item}){
    const {id, title, name, release_date, first_air_date, poster_path} =item;
    const imgUrl = "http://image.tmdb.org/t/p/w300" + item.poster_path;
    return (
    <ItemBlock>
        <Link to={`/${title ? "movie" : "tv"}/${id}`}>
            <ImgBox><img src={imgUrl} alt={title || name} /></ImgBox>
            <TitleText>{title || name}</TitleText>
            <ReleaseDate>{release_date || first_air_date}</ReleaseDate>
        </Link>
    </ItemBlock>
    )
}

// 새로고침 없이 그 주소로 이동 하는 명령어 Link
// import {Link} from 'react-router-dom'
// 반환값 중 옮겨가야하는 부분을 <Link></Link>로 감싸주기

const ItemBlock = styled.li`
    text-align: center;
    & + &{
        margin-left:20px;
    }
`

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 400px;
    overflow: hidden;
    background-color: aqua;
    img {
        height: 100%;
    }
`

const TitleText = styled.h4`
    font-size: 1.2em;
    font-weight: 700;
    margin: 10px 0 5px;
`

const ReleaseDate = styled.span`
    font-size: 0.9em;
    color:#bbb;
`