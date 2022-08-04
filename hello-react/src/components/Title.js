import styled from "styled-components"

export default function Title({title}){
return <TitleText>{title}</TitleText>;

}

const TitleText = styled.h2`
font-size: 20px;
color: #fff;
font-weight: 400;
`;