import React from "react";
import Layout from "../../layouts/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";
import { fetchArticles } from "../../store/actions-creators/article";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "../../styles/Pages/artikel.module.scss";


const Artikel = () => {
  const { articles, articleError } = useTypedSelector((state) => state.article);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <h2 className = {styles.artikel_styleH2}> Online-Apotheke stellte häufig Fragen</h2>
      </div>
    </Layout>
  );
};

export default Artikel;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
    await dispatch(await fetchArticles());
  }
);
