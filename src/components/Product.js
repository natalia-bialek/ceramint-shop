import * as React from "react";
import ProductDetails from "./ProductDetails";
import "../styles/components/SingleProduct.css";

export default function Product(props) {
  const { name, price, isAvaliable, slug } = props.product;
  const capacity = props.product.capacity || null;
  const slugURL = capacity ? slug + "-" + capacity + "ml" : slug;
  const imageURL = props.product.image[0].file.url;
  //if !isAvaliable szary obrazek
  return (
    <a className="product" href={slugURL}>
      {capacity ? (
        <ProductDetails
          name={name}
          slugURL={slugURL}
          capacity={capacity}
          price={price}
        />
      ) : (
        <ProductDetails name={name} slug={slugURL} price={price} />
      )}
      <div className="product__image">
        {imageURL && (
          <img
            alt=""
            src={imageURL}
            className={isAvaliable ? "" : "notAvaliable"}
          />
        )}
      </div>
    </a>
  );
}
