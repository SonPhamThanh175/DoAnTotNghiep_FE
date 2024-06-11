import React from "react";
import PropTypes from "prop-types";

import TypeProduct from "../../components/TypeProduct";
import { WrapperTypeProdyct } from "./style";

function HomePage(props) {
  const category = ['Tv', 'Tủ Lạnh ','Laptop']
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProdyct>
        {category.map((item) => {
          return (
            <TypeProduct key={item} name={item} />
          );
        })}
      </WrapperTypeProdyct>
      HomePage
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
