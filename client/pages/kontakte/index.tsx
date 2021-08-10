import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";

const Kontakte = () => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
      </div>
    </Layout>
  );
};

export default Kontakte;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
  }
);
