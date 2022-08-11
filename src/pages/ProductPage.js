import * as React from "react";
import "../styles/pages/productPage.css";
import NavigationBar from "../components/NavigationBar";
import PrimaryButton from "../components/PrimaryButton";
import TabsComponent from "../components/TabsComponent";

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
          <TabsComponent
            stock={stock}
            description={description}
            capacity={capacity}
          />
          <p className="text--uppercase">Cena: {price}PLN</p>
          <PrimaryButton value="+ Dodaj do koszyka" />
        </div>
      </div>
    </>
  );
}
