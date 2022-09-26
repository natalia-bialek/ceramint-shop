import { useAllProducts } from "../hooks/useAllProducts";
import * as React from "react";
import ProductGrid from "../components//ProductsGrid/ProductsGrid";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton";
import Footer from "../components/Footer/Footer";
import { TbX } from "react-icons/tb";
import "../styles/style.css";
import "../styles/pages/index.css";

function categoryFilter(categoryName) {
  categoryName = categoryName.toLowerCase();
  //get all grid items and nav buttons
  const allProducts = document.querySelectorAll(".item");
  //clearing the filter
  if (categoryName === "all") {
    allProducts.forEach((product) => {
      product.classList.add("visible");
    });
    return;
  }
  const allHeaders = document.querySelectorAll(".item__header");
  allHeaders.forEach((header, index) => {
    //check if name of product in lower case contains category name
    if (!header.innerHTML.toLowerCase().indexOf(categoryName)) {
      //if yes, change the visibility of the grid item
      allProducts[index].classList.add("visible");
    } else {
      allProducts[index].classList.remove("visible");
    }
  });
}

const IndexPage = () => {
  const products = useAllProducts();
  React.useEffect(() => {
    categoryFilter("all");
  }, []);

  return (
    <>
      <NavigationBar />
      <ul className="filters">
        <li className="filter">
          <SecondaryButton onClick={() => categoryFilter("all")}>
            <TbX />
            Wyłącz filtrowanie
          </SecondaryButton>
        </li>
        <li className="filter">
          <SecondaryButton onClick={() => categoryFilter("miska")}>
            Miski
          </SecondaryButton>
        </li>
        <li className="filter">
          <SecondaryButton onClick={() => categoryFilter("talerz")}>
            Talerze
          </SecondaryButton>
        </li>
        <li className="filter">
          <SecondaryButton onClick={() => categoryFilter("kubek")}>
            Kubki
          </SecondaryButton>
        </li>
      </ul>
      <ProductGrid products={products} />
      <Footer />
    </>
  );
};

export default IndexPage;
