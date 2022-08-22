import styled from "styled-components";
import Title from "../common/Title";
import PopularItem from "./PopularItem";

import { useEffect, useState } from "react";
import { getPopular } from "../../custom-axios";
import TabList from "../common/TabList";
import TabMenu from "../common/TabMenu";

export default function PopularList({title}){
    const [data, setData] = useState([]);
    const [tabList, setTabList] = useState([
        {id:1, text:"TV", active:true, category:"tv"},
        {id:2, text:"Movie", active:false, category:"movie"},
    ]);
    // menu => {id:1, text:"TV", active:false} 메뉴 이름을 지칭
    // 변수지정이나 함수에서 사용한 적 없는 그냥 이름????

    const onClickTab = (id) => {
        setTabList(
            tabList.map((menu) => 
            menu.id === id 
            ? {...menu, active:true}
            : {...menu, active:false}
    ))
    }

    // fetchData와 useEffect를 이용해  


    useEffect(() => {
        // tabList가 업데이트 될 때마다 useEffect안의 코드가 실행
        // => tabList가 별할 때마다 fetchData함수가 재생성 후 실행.
        const fetchData = async () => {
            // Array.protype.find() => 조건에 부합하는 요소 한개만(첫번째)만 반환(배열x)
            const category = tabList.find(menu => menu.active).category;
            let {results} = await getPopular(category);
            setData(results);
        }
        
        fetchData()}
        ,[tabList]);

    return (
    <ListBlock>
        <TitleBox>
            <Title title={title} margin="0 20px 0 0"/>
            <TabList>
                {tabList.map((menu) => (
                <TabMenu key={menu.id} menu={menu} onClickTab={onClickTab}/>))}
            </TabList>
        </TitleBox>
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

const TitleBox = styled.div`
    display: flex;
    align-items: center;
`