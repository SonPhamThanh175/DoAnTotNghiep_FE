import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width:200px; 
    & img{
        height:250px;
        width:200px; 
    }
`

export const TitleCard = styled.div`
    font-weight: bold 400px;
    font-size: 12px;
    line-height:16px;
    color: rgb(56,56,61);
`

export const WrapperPreviews = styled.div`
    font-size: 11px;
    color: rgb(128,128,137);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
`

export const WrapperSalePriceCard = styled.div`
    color: rgb(255,66,78);
    font-size: 16px;
    font-weight: 500;
    margon: 8px 0;
`

export const WrapperOriginalPriceCard = styled.span`
    color: rgb(255,66,78);
    font-size: 13px;
    font-weight: 300;
`
