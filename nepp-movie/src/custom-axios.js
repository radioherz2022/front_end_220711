import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization : 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTllNTUyYjYzM2QxNTE3NDU0NzA5ZDNjODFjNWUzNyIsInN1YiI6IjYyZmRlYjVjNzRkNmMwMDA4NjBhOGEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-EZCffP_NpYNEhEPHV3_CoK9XHJjzFnRt6wzHoiQkE "
    }
});

export const getPopular = async () => {
    let {data} = await instance.get("movie/popular", {
        params:{
            language: "ko-KR", 
        }
    })

    return data;
}