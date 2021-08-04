import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchProducts } from "../../store/actions-creators/product";
import Layout from "../../layouts/Layout";
import { Catalog } from "../../containers/Catalog/Catalog";
import { fetchCategories } from "../../store/actions-creators/category";

export default function Index() {
  const { products } = useTypedSelector((state) => state.product);
  const {
    filters: { type },
  } = useTypedSelector((state) => state.category);

  const filteredProducts = products.filter(
    (e) => e.type.toLowerCase() === type.toLowerCase()
  );

  return (
    <Layout>
      <div className="container">
        <div style={{ marginLeft: "280px" }}>
          <Catalog title={type} products={filteredProducts} />
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
