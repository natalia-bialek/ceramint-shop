import * as React from "react";
import ProductHeader from "./ProductHeader";

export default function ProductDetails(props) {
  return (
    <div className="product__details">
      <ProductHeader
        name={props.name}
        slugURL={props.slugURL}
        capacity={props.capacity}
      />
      <div className="product__price">{props.price} PLN</div>
    </div>
  );
}
