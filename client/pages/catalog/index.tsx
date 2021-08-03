import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchProducts } from "../../store/actions-creators/product";
import Layout from "../../layouts/Layout";
import { Catalog } from "../../containers/Catalog/Catalog";
import { fetchCategories } from "../../store/actions-creators/category";

export default function Index() {
  const { products, productError } = useTypedSelector((state) => state.product);
  console.log("products", products);
  if (productError) {
    return (
      <div>
        <h1>{productError}</h1>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container">
        <div style={{ marginLeft: "280px" }}>
          <Catalog title={"Viagra"} products={products} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchProducts());
    await dispatch(await fetchCategories());
  }
);
