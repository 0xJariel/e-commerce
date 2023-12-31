import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import ShopBody from "../components/ShopBody";
import CategoryFilter from "../components/CategoryFilter";

function Shop() {
  const [products] = useOutletContext();
  return (
    <>
      <CategoryFilter />
      <ShopBody products={products} />
      {/* <ShopCarousel /> */}
    </>
  );
}

export default Shop;
