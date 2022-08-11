import * as React from "react";

export default function ProductHeader(props) {
  return (
    <>
      <h2 className="product__header text--uppercase">
        {props.name}
        {props.capacity && <span>{props.capacity}ml</span>}
      </h2>
    </>
  );
}
