import { Checkbox, Col, Rate } from "antd";
import React from "react";
import {
    CheckBoxGroup,
    WrapperContent,
    WrapperLableText,
    WrapperTextPrice,
    WrapperTextValue
} from "./style";

function NavbarComponent(props) {
  const onChange = () => {};

  const renderContent = (type, option) => {
    switch (type) {
      case "text":
        return option.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <CheckBoxGroup
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onChange={onChange}
          >
            {option.map((option) => {
              return <Checkbox value={option.value}>{option.lable}</Checkbox>;
            })}
          </CheckBoxGroup>
        );
      case "star":
        return option.map((option) => {
          return (
            <div style={{ display: "flex", gap: "10px" }}>
              <Rate
                style={{ fontSize: "12px", color: "rgb(255, 196, 0)" }}
                disabled
                defaultValue={option}
              />
              <span>Từ {option} sao </span>
            </div>
          );
        });
      case "price":
        return option.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });

      default:
        return {};
    }
  };
  return (
    <Col 
    // style={{ width: "200px" }}
      span={6}
    >
      <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tủ lạnh ", "Tivi", "Máy giặt"])}
      </WrapperContent>
      <WrapperLableText>Ưu đãi </WrapperLableText>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", lable: "Mã giảm giá từ shop" },
          { value: "b", lable: "Free ship " },
          { value: "c", lable: "Cả 2" },
        ])}
      </WrapperContent>
      <WrapperLableText>Bán tại</WrapperLableText>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", lable: "Hà Nội" },
          { value: "b", lable: "Hồ Chí Minh" },
          { value: "c", lable: "Cần Thơ" },
        ])}
      </WrapperContent>
      <WrapperLableText>Đáng giá </WrapperLableText>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperLableText>Khoảng giá </WrapperLableText>
      <WrapperContent>
        {renderContent("price", ["dưới 40", "khoảng 40-100", "trên 100"])}
      </WrapperContent>
    </Col>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
