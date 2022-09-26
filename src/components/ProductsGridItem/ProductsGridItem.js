import * as React from "react";
import "./ProductsGridItem.css";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TbShoppingCartPlus } from "react-icons/tb";

export default function ProductsGridItem(props) {
  const { name, price, isAvaliable, slug } = props.product;
  const capacity = props.product.capacity || null;
  const slugURL = capacity ? slug + "-" + capacity + "ml" : slug;
  const imageURL = props.product.image[0].file.url;
  //if !isAvaliable szary obrazek
  return (
    <div className="item">
      <a href={slugURL} className="item__content">
        <h2 className="item__header text--uppercase">{name}</h2>
        {capacity && <span>{capacity}ml</span>}
        <div className="item__image">
          {imageURL && (
            <img
              alt=""
              src={imageURL}
              className={isAvaliable ? "" : "notAvaliable"}
            />
          )}
        </div>
      </a>
      <div className="item__footer">
        <span className="item__price text--bold">{price} PLN </span>
        <PrimaryButton className="item__button icon">
          <TbShoppingCartPlus />
        </PrimaryButton>
      </div>
    </div>
  );
}
