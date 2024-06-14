import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Col } from "antd";
import React from "react";
import ButtonInputSearch from "../ButtonInputSearch";
import { WrapperCartHeader, WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";

function Header(props) {
  return (
    <div>
      <WrapperHeader >
        <Col 
            span={6} 
            style={{
              marginTop: "8px",
            }}
        >
            <WrapperTextHeader>
               DOANTOTNGHIEP
            </WrapperTextHeader>
        </Col>
        <Col span={12} >
            {/* <Search
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                allowClear
                size="large"
                onSearch={value => console.log(value)}
            /> */}
            <ButtonInputSearch
              size = "large"
              placeholder = "search"
              textButton= " Tìm kiếm "
              backgroundColorInput="#fff"
            />
        </Col>
        <Col span={6} style={{display: 'flex' , flexDirection:'row'}}>
              <WrapperHeaderAccount>
                  <UserOutlined style={{ fontSize : '30px'}}/>
                  <div>
                    <WrapperTextHeaderSmall >Đăng ký/ Đăng nhập</WrapperTextHeaderSmall>
                    <div>
                      <WrapperTextHeaderSmall >Tài khoản</WrapperTextHeaderSmall>
                      <CaretDownOutlined/>
                    </div>
                  </div>
              </WrapperHeaderAccount>
              <WrapperCartHeader>
                  <Badge count={4}>
                      <ShoppingCartOutlined style={{ fontSize : '35px' , color:'#fff'}}/>
                  </Badge>
                  <WrapperTextHeaderSmall >Giỏ hàng </WrapperTextHeaderSmall>
              </WrapperCartHeader>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default Header;
