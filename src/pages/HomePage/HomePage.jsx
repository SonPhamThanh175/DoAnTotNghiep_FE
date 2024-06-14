import React from "react";
import CardComponent from "../../components/CardComponent";
import SlideShow from "../../components/SlideShow";
import TypeProduct from "../../components/TypeProduct";
import { WrapperButtonSeeMore, WrapperProducts, WrapperTypeProdyct } from "./style";

function HomePage(props) {
  const category = ["Tv", "Tủ Lạnh ", "Laptop"];
  return (
    <>
      <WrapperTypeProdyct>
        {category.map((item) => {
          return <TypeProduct key={item} name={item} />;
        })}
      </WrapperTypeProdyct>
      <div style={{ padding: "0 120px", backgroundColor: "#efefef" }}>
        {/* <div
          style={
            {
              // backgroundColor: "#efefef",
            }
          }
        > */}
        <div
          id="container"
          style={{
            // backgroundColor: "#efefef",
            // padding: '0 120px',
            // height:'1000px '
            width: "100%",
          }}
        >
          <SlideShow />
        </div>
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <WrapperButtonSeeMore
            textButton="Xem thêm"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "rgb(11,116,229)",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "16px",
            }}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
