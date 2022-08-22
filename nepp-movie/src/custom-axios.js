import axios from "axios";

// 비동기처리를 동기처럼 불러오는 async
// await 와 항상 함께 정리해야

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization : 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTllNTUyYjYzM2QxNTE3NDU0NzA5ZDNjODFjNWUzNyIsInN1YiI6IjYyZmRlYjVjNzRkNmMwMDA4NjBhOGEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-EZCffP_NpYNEhEPHV3_CoK9XHJjzFnRt6wzHoiQkE "
    }
});

export const getPopular = async (category) => {
    let {data} = await instance.get(`${category}/popular`, {
        params:{
            language: "ko-KR", 
        
        }
    })
    return data;
}

//영화 상세보기 데이터 받아오기
// /movie/234252

// movie/123123?language=ko-KR 찍힌 것과 다름 없는 변수 

export const getDetail = async (url) => {
    let result = await instance.get(url,{
    params : {
        language:"ko-KR",
    }
    })
    return result;
}

// /movie/{movie}