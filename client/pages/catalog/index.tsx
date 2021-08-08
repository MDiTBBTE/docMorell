import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchProducts } from "../../store/actions-creators/product";
import Layout from "../../layouts/Layout";
import { Catalog } from "../../containers/Catalog/Catalog";
import { fetchCategories } from "../../store/actions-creators/category";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export default function Index() {
  const { products, searchedProducts } = useTypedSelector(
    (state) => state.product
  );
  const {
    filters: { type },
  } = useTypedSelector((state) => state.category);

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    if (!searchedProducts) {
      setFilteredProducts(
        products.filter((e) => e.type.toLowerCase() === type.toLowerCase())
      );
    } else {
      setFilteredProducts(searchedProducts);
    }
  }, [type, searchedProducts]);

  return (
    <Layout>
      <div className="container">
        <div style={{ marginLeft: "280px" }}>
          <Breadcrumbs />
          {filteredProducts && (
            <Catalog
              title={type || sessionStorage.getItem("query")}
              products={filteredProducts}
            />
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
