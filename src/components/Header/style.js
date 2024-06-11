import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding : 10px 120px ;
    background-color : rgb(26, 148, 255);
`
export const WrapperTextHeader = styled.span`
    font-size : 18px ;
    color : #fff ;
    font-weight : bold ;
    text-align : center ;
    justify-content : center; 
    margin-top : 8px ;
`

export const WrapperHeaderAccount = styled.div`
    display : flex ;
    flex-direction : row;
    align-items : center;
    color : #fff;
    gap : 10px ;
    margin-left : 10px ;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size : 12px ;
    color : #fff ;

`

export const WrapperCartHeader = styled.div`
    margin-left : 10px ;
    display : flex ;
    flex-direction : column;
`

