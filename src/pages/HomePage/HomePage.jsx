import React from "react";
import PropTypes from "prop-types";
import TypeProduct from "../../components/TypeProduct";
import { WrapperTypeProdyct } from "./style";
import SlideShow from "../../components/SlideShow";
import CardComponent from "../../components/CardComponent";
import NavbarComponent from "../../components/NavbarComponent";

function HomePage(props) {
  const category = ["Tv", "Tủ Lạnh ", "Laptop"];
  return (
    <>
        <WrapperTypeProdyct>
          {category.map((item) => {
            return <TypeProduct key={item} name={item} />;
          })}
        </WrapperTypeProdyct>
      <div style={{ padding: "0 120px" ,backgroundColor: "#efefef"}}>
        <div style={{ 
                // backgroundColor: "#efefef", 
              }}>
            <div
              id="container"
              style={{ 
                // backgroundColor: "#efefef" 
              }}
            >
              <SlideShow />
            </div>
            <div style={{ marginTop: "20px",display:'flex', alignItems:'center',gap:'20px' }}>
              <CardComponent />
            </div>
            <NavbarComponent />
        </div>
      </div>
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
