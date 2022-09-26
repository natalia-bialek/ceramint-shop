import * as React from "react";
import ProductsGridItem from "../ProductsGridItem/ProductsGridItem";
import "./ProductsGrid.css";

export default function ProductsGrid(props) {
  return (
    <>
      <div className="grid__container">
        {props.products.map((item, index) => {
          return <ProductsGridItem product={item} key={item.name + index} />;
        })}
      </div>
    </>
  );
}
