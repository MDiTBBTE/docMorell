import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchProducts } from "../../store/actions-creators/product";
import Layout from "../../layouts/Layout";
import { Catalog } from "../../containers/Catalog/Catalog";
import {
  addFilters,
  fetchCategories,
} from "../../store/actions-creators/category";
import { useDispatch } from "react-redux";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";

export default function Index() {
  const dispatch = useDispatch();

  const { products } = useTypedSelector((state) => state.product);
  const {
    filters: { type },
  } = useTypedSelector((state) => state.category);

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const category = sessionStorage.getItem("category");
    const type = sessionStorage.getItem("type");

    if (category || type) {
      dispatch(addFilters({ category: category, type: type }));
      setFilteredProducts(
        products.filter((e) => e.type.toLowerCase() === type.toLowerCase())
      );
    }

    const breadcrumbs = [
      {
        text: "Home",
        route: "/",
      },
      {
        text: type,
        route: "/",
      },
    ];
    dispatch(addBreadcrumb(breadcrumbs));
  }, [type]);

  return (
    <Layout>
      <div className="container">
        <div style={{ marginLeft: "280px" }}>
          <Breadcrumbs />
          {filteredProducts && (
            <Catalog title={type} products={filteredProducts} />
          )}
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
