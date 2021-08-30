import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";
import { fetchArticles } from "../../store/actions-creators/article";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "../../styles/Pages/artikel.module.scss";
import  Pagination  from "../../pages/artikel/pagination";
const Artikel = () => {
  const { error } = useTypedSelector((state) => state.category);
  const {articles, articleError } = useTypedSelector((state) => state.article);
  const { productError } = useTypedSelector((state) => state.product);

  if (error) {
    return (
      <div>
        <h1>{error || articleError || productError}</h1>
      </div>
    );
  }
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <h2 className={styles.artikel_styleH2}>
          Online-Apotheke stellte häufig Fragen
        </h2>

        <div className={styles.artikel_cards}>
          {articles.map(({ title, text, date, picture }) => (
            <div className={styles.artikel_cards_stylesCards}>
              <img
                width={250}
                src={`http://localhost:5000/${picture}`}
                alt=""
              />
              <div className={styles.artikel_cards_stylesCards_position}>
                <h4 className={styles.artikel_cards_stylesCards_title}>
                  {title}
                </h4>
                <p className={styles.artikel_cards_stylesCards_text}>{text}</p>
                <p className={styles.artikel_cards_stylesCards_date}>{date}</p>
              </div>
            </div>
          ))}
        </div>
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
