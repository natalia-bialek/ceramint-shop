import * as React from "react";
import Product from "./Product";
import "../styles/components/ProductList.css";

export default function ProductList(props) {
  return (
    <>
      <div className="grid__container">
        {props.products.map((item, index) => {
          return <Product product={item} key={item.name + index} />;
        })}
      </div>
    </>
  );
}
