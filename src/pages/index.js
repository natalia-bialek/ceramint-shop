import { useAllProducts } from "../hooks/useAllProducts";
import * as React from "react";
import ProductList from "../components/ProductList";
import NavigationBar from "../components/NavigationBar";
import "../styles/style.css";

const IndexPage = () => {
  const products = useAllProducts();
  //console.log(products);
  return (
    <>
      <NavigationBar />
      <ProductList products={products} />
    </>
  );
};

export default IndexPage;
