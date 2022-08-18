import styled from "styled-components";
import Title from "../common/Title";
import PopularItem from "./PopularItem";

import { useEffect, useState } from "react";
import { getPopular } from "../../custom-axios";



export default function PopularList({title}){
    const [data, setData] = useState([]);

    // fetchData와 useEffect를 이용해  
    const fetchData = async () => {
        let {results} = await getPopular();
        setData(results);
    }

    useEffect(() => {
        fetchData();
    },[]);
    return (
    <ListBlock>
        <Title title={title}/>
        <ul>
            {data.map((item) => <PopularItem key={item.id} item={item} /> )}
        </ul>
    </ListBlock>
    )
}

const ListBlock = styled.div`
margin-bottom: 100px;
    ul {
        margin-top: 30px;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`