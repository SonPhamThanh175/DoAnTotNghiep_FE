import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { formatPrice } from "../../utils/common";
import { TitleCard, WrapperCardStyle, WrapperOriginalPriceCard, WrapperPreviews, WrapperSalePriceCard } from "./style";


const { Meta } = Card;

function CardComponent(props) {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px'}}
      style={{ width: 200 }}
      bodyStyle={{
        padding: "10px",
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <TitleCard>Iphone</TitleCard>
      <WrapperPreviews>
        <div>
          <span>4.67</span>
          <StarFilled style={{ fontSize: "12px", color: "rgb(255, 196, 0)" }} />
        </div>
        <span>| Đã bán 1000+</span>
      </WrapperPreviews>
      <div style={{ display: 'flex', flexDirection:'row'}}>
        <WrapperSalePriceCard>
            {formatPrice(100000)}
            <WrapperOriginalPriceCard>- 5%</WrapperOriginalPriceCard>
        </WrapperSalePriceCard>
      </div>
    </WrapperCardStyle>
  );
}

CardComponent.propTypes = {};

export default CardComponent;
