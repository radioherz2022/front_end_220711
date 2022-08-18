import styled from "styled-components";

export default function PopularItem({item}){
    const imgUrl = "http://image.tmdb.org/t/p/w300" + item.poster_path;
    return (
    <ItemBlock>
        <ImgBox>
        <img src={imgUrl} alt="" /></ImgBox>
        <TitleText>{item.title}</TitleText>
        <ReleaseDate>{item.release_date}</ReleaseDate>
    </ItemBlock>
    )
}

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