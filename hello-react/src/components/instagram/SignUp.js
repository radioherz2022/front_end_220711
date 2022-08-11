import styled from "styled-components";

export default function SignUp(){
    return ( 
    <BlockB>             
    <p>계정이 없으신가요?<a href="">가입하기</a></p>
    </BlockB>
);
}

const BlockB = styled.div`
width: 350px;
max-height: 500px;
border: 1px solid #dbdbdb;
padding:10px;
background-color: #fff;
text-align: center;

    h2{
        cursor: pointer;
        margin-top: 50px;
    }
`
