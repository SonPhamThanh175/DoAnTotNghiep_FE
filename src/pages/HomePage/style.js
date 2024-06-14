import styled from "styled-components";
import ButtonComponent from "../../components/form-controls/ButtonComponent";

export const WrapperTypeProdyct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 1px solid;
  height: 44px;
  background-color: white;
  padding-left: 120px;
  // padding: "0 120px" ;
`;

export const WrapperButtonSeeMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: rgb(13,92,182);
        span {
        color: #fff;
        }
    }
    width:'100%',
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap:15px;
    margin-top: 20px;
    flex-wrap: wrap;
`
