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
import { CONTENT } from "../../public/config.lang";

export default function Index() {
  const dispatch = useDispatch();

  const {
    filters: { type },
  } = useTypedSelector((state) => state.category);

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const category = sessionStorage.getItem("category");
    const type = sessionStorage.getItem("type");

    if (category || type) {
      dispatch(addFilters({ category: category, type: type }));
    }
  }, [type]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    console.log(JSON.parse(items));
  });
  return (
    <Layout>
      <div className="container">
        <div style={{ marginLeft: "280px" }}>
          <h2>{CONTENT.cart.title}</h2>
        </div>
      </div>
    </Layout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//     async ({ store }) => {
//         const dispatch = store.dispatch as NextThunkDispatch;
//         await dispatch(await fetchProducts());
//         await dispatch(await fetchCategories());
//     }
// );
