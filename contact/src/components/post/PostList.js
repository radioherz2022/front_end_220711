import { useState } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8000/",
})

export default function PostList(){

    const[postList, setPostList] = useState([]);
    const[input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const fetchData = async () => {
        // http 요청을 할 수 있는 js 내장 함수
        // => 기본적으로 get요청을 한다.
        //fetch("http://localhost:8000/posts")
        // .then(res => res.json())
        // .then(data => setPostList(data))
        // .catch(err => console.log(err))
    //     try{
    //     let result = await fetch("http://localhost:8000/posts")
    //     let data = await result.json();
    //     setPostList(data);
    //     } catch (err){
    //         console.log(err);
    // }
    try {
        let result = await instance.get("posts")    
        setPostList(result.data);
    } catch(err){
        console.log(err);
    }
    }

    const createPost = async () => {
        // try{
        //     let result = await fetch("http://localhost:8000/posts", {
        //         method: "POST",
        //         body: JSON.stringify({
        //         title : input,
        //         author : "radioherz"
        //         }),
        //         headers:{
        //             "Content-type" : "application/json; charset=UTF-8",
        //         }
        //     })
        //     let resultData = await result.json();
        //     fetchData();
        // }catch(err){
        //     console.log(err)
        // }
        try{
            let result = await instance.post("posts", {
                title:input,
                author : "radioherz",
            })
            console.log(result.data)
        }catch(err){
            console.log(err)
        }

    }

    const deletePost = async (id) => {
        let result = await instance.delete("posts/" + id);
        fetchData(result);
    }

    const patchPost = async (id) => {
        let result = await instance.patch("/posts/" + id, {author : "라디오헤르쯔"})
        fetchData(result);
    } 

    return (
    <div>
        <input type="text" onChange={handleInput}/>
        <button onClick={createPost}>등록</button>
        <ul>
            {postList.map((post) => (<li key={post.id} onClick={() => patchPost(post.id)}>
                {post.title}({post.author});
            <button onClick={() => deletePost(post.id)}>삭제</button></li>))}
        </ul>
        <button onClick={fetchData}>받아오기</button>
    </div>
    )
}