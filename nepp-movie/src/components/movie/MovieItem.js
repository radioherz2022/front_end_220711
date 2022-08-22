import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({movie, ref}){
    const {title, release_date, poster_path} = movie;
    const imgUrl = `http://image.tmdb.org/t/p/w200${poster_path}`;

    return (
    <Block ref={ref}>
        <Link to={`/movie/${movie.id}`}>
        <ImgBox><img src={imgUrl} alt={title} /></ImgBox>
        <DescBox>
            <TitleText>{title}</TitleText>
            <ReleaseDate>{release_date}</ReleaseDate>
        </DescBox>
        </Link>
    </Block>
    )
}

const Block = styled.div`
    width: 200px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 4px 4px 8px 2px rgba(0,0,0,0.1);
`

const ImgBox = styled.div`
    width: 200px;
    height: 300px;
    background-color: tomato;
`
const DescBox = styled.div`
    padding: 10px 0 20px 10px;
`

const TitleText = styled.h4`
    font-size: 1.2em;
    font-weight: 600;
    margin: 5px 0 5px;
`

const ReleaseDate = styled.span`
    color:#bbb;
`