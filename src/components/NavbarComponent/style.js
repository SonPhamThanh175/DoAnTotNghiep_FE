import { Checkbox } from "antd";
import styled from "styled-components";

export const WrapperLableText = styled.h4`
    color: rgb(56,56,61);
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const WrapperTextValue = styled.span`
    color: rgb(56,56,61);
    font-size: 12px;
    font-weight: 400;
`

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 12px;
    width: 200px;
`

export const CheckBoxGroup = styled(Checkbox.Group)`
    // width :100% ,
    // display:flex, 
    // flexDirection:column;
    // align-items:center;
    // justify-content: center;
`

export const WrapperTextPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius:12px;
    background-color: rgb(255,255,255);
    padding: 0.25em;
`
