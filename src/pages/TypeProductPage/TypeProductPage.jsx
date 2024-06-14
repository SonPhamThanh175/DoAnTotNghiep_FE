import { Col, Pagination, Row } from "antd";
import React from "react";
import CardComponent from "../../components/CardComponent";
import NavbarComponent from "../../components/NavbarComponent";
import { WrapperNavbar, WrapperProducts } from "./style";

function TypeProductPage(props) {
  const onChange = () => {};
  return (
    <div style={{
        padding: "0 120px",
        backgroundColor: "#efefef",
    }}>
      <Row
        style={{
          paddingTop: "10px",
          flexWrap: "nowrap",
        }}
      >
        <WrapperNavbar span={6}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={18}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // textAlign: "center",
                padding:'10px'
            }}>
                <Pagination
                    defaultCurrent={2}
                    total={500}
                    onChange={onChange}
                />
            </div>
        </Col>
      </Row>
    </div>
  );
}

TypeProductPage.propTypes = {};

export default TypeProductPage;
