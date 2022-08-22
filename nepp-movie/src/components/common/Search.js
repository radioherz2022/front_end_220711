import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearch } from "../../custom-axios";
import ResultItem from "./ResultItem";

const debounce = (func, wait) => {
    let timer;
    return function(...rest){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, rest);
        }, wait);
    }

}

export default function Search(){
    const [query, setQuery] = useState("");
    const [resultList, setResultList] = useState([]);
    const [hide, setHide] = useState(true)
    const handleQuery = debounce(setQuery, 500);

    useEffect(() => {
        if(query === "") return;
        getSearch(query).then((res) => 
        setResultList(res.data.results));
    },[query])

    return (
    <Block>
        <input 
        type="text" 
        onChange={(e) => handleQuery(e.target.value)} 
        onBlur = {() =>
        setTimeout(() => {
            setHide(true);
        },150)
        }
        onFocus = {() => {
            setHide(false);
        }}
        />
            {!hide && (
                <ResultList>
                    {resultList.map((result) => (
                    <ResultItem result={result} />
                    ))}
                </ResultList>
            )}
           
    </Block>
    )
}

const Block = styled.div`
    padding:5px;
    border: 1px solid #ddd;
    margin-left: 50px;

    input{
        border: none;
        outline: none;
    }
    position: relative;
    z-index: 100;
`

const ResultList = styled.ul`
    position : absolute;
    width: 100%;
    top:100%;
    left: -1px;
    border: 1px solid #ddd;
    border-bottom: none;
`

