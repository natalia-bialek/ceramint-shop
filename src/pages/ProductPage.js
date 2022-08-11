import * as React from "react";
import "../styles/pages/productPage.css";
import NavigationBar from "../components/NavigationBar";
import PrimaryButton from "../components/PrimaryButton";
import TabsComponent from "../components/TabsComponent";
import { TbPlus } from "react-icons/tb";

export default function ProductPage(props) {
  const { name, capacity, price, imageURL, isAvaliable, stock, description } =
    props.pageContext;
  return (
    <>
      <NavigationBar />
      <div className="productPage">
        <div className="productPage__breadcrumbs"></div>
        <div className="productPage__image">
          <img src={imageURL} />
        </div>
        <div className="productPage__content">
          <h1 className="productPage__header text--uppercase">{name}</h1>
          <p>{isAvaliable ? "Dostępny" : "Niedostępny"}</p>
          <p className="productPage__price text--uppercase text--bold">
            {price} PLN
          </p>
          <TabsComponent
            stock={stock}
            description={description}
            capacity={capacity}
          />
          <PrimaryButton>
            <TbPlus />
            &nbsp;Dodaj do koszyka
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
