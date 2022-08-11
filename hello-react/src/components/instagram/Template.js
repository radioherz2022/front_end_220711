import styled from "styled-components";

export default function Template(){
    return ( 
        <Block>
            <h2>
            <img src={require("./insta_logo.png")} alt=""/>
            </h2>
            <LoginForm>
                <input type="text" placeholder="Phone number, username, or email"></input>
                <input type="password" placeholder="password"></input>
                <button>로그인</button>
            </LoginForm>
            <DevideLine>
                <p>또는</p>
            </DevideLine>
            <BottomText>
                <button>Facebook으로 로그인</button>
                <p>비밀번호를 잊으셨나요?</p>
            </BottomText>
            <BlockB>             
            <p>계정이 없으신가요?<a href="">가입하기</a></p>
            </BlockB>
        </Block>

    )
}

const Block = styled.div`
width: 350px;
height: 500px;
border: 1px solid #dbdbdb;
padding:10px;
background-color: #fff;
text-align: center;

    h2{
        cursor: pointer;
        margin-top: 50px;
    }
`

const LoginForm = styled.div`
    display: inline-block;

    input{
        width: 268px;
        height: 38px;
        margin-bottom:5px;
        border:1px solid #ddd;
        border-radius: 4px;
        padding-left: 10px;
        background-color: #fafafa;
    }
    button{
        width: 276px;
        height: 40px;
        border-style: none;
        border-radius: 4px;
        color:#fff;
        font-weight: 700;
        margin-top: 5px;
        background-color: #0095f6;
    }

`

const DevideLine = styled.div`
    font-size: 12px;
    text-align: center;
    display: flex;
    margin: 15px 40px;
    align-items: center;

    ::after,
    ::before {
    content: "";
    display: block;
    height: 1px;
    width: 16px;
    flex: 1;
    background: rgb(219, 219, 219);
}
`

const BottomText = styled.div`
    button{
        height: 30px;
    }
    p{
        font-size:12px;
    }

`

const BlockB = styled.div`
margin-top: 135px;
width: 350px;
max-height: 500px ;
border: 1px solid #dbdbdb;
padding:10px;
background-color: #fff;
text-align: center;

    p{
        font-size:14px;
    }
`
