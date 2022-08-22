import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../custom-axios";
import Title from "../common/Title";
import MovieItem from "./MovieItem";
import { useInView } from "react-intersection-observer";

export default function MovieList(){
    const[movieList, setMovieList] = useState([]);
    const[ref, inView] = useInView();
    // 무한 리스트 불러오기 라이브러리 = useInView
    // 특정요소가 화면에 보이는 순간 false => true로 변한다

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (isLoading) return;
        if (inView) setPage((page) => page + 1)
    },[inView, isLoading]);

    useEffect(() => {
        getPopular("movie", page).then((res) => {
        setMovieList((movieList) => [...movieList, ...res.results]);
        setTimeout(() => {
            setIsLoading(false);
        },2000); 
    })
    ;
    },[page]);

    return (
        <div>
        <Title title="인기 영화" margin="0 0 40px 0"/>
        <ListBlock>
            {movieList.map((movie) =>(<MovieItem key={movie.id} movie={movie} />))}
            <div ref={ref}>페이지 마지막</div>
        </ListBlock>
    </div>
    )
}

const ListBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // flex-wrap: wrap; => flex 사용시 줄바꿈 줄 때 사용
`


// API 데이터를 받아오기 위해 axios설치가 필요~
// npm install axios