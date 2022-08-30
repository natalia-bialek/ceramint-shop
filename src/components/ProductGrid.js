import * as React from "react";
import ProductGridItem from "./ProductGridItem";
import "../styles/components/ProductGrid.css";

export default function ProductGrid(props) {
  return (
    <>
      <div className="grid__container">
        {props.products.map((item, index) => {
          return <ProductGridItem product={item} key={item.name + index} />;
        })}
      </div>
    </>
  );
}
