import { Col } from "antd";
import React from "react";
import {  WrapperCartHeader, WrapperHeader,WrapperHeaderAccount,WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import Search from "antd/es/input/Search";
import { CaretDownOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch";

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
                    <span style={{marginRight: "10px"}}>Đăng ký/ Đăng nhập</span>
                    <div>
                      <span style={{marginRight: "10px"}}>Tài khoản</span>
                      <CaretDownOutlined/>
                    </div>
                  </div>
              </WrapperHeaderAccount>
              <WrapperCartHeader>
                  <ShoppingCartOutlined style={{ fontSize : '35px' , color:'#fff'}}/>
                  <WrapperTextHeaderSmall >Giỏ hàng </WrapperTextHeaderSmall>
              </WrapperCartHeader>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default Header;
