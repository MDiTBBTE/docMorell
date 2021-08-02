import React from "react";
import Layout from "../layouts/Layout";
import { Catalog } from "../containers/Catalog/Catalog";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../store";
import { fetchProducts } from "../store/actions-creators/product";
import { fetchArticles } from "../store/actions-creators/article";
import { AsideArticle } from "../containers/AsideArticle/AsideArticle";
import styles from "../styles/Pages/Index.module.scss";
import { FAQ } from "../containers/FAQ/FAQ";
import { CONTENT } from "../public/config.lang";
import { PaymentBoard } from "../components/PaymentBoard/PaymentBoard";
import { DeliveryBoard } from "../components/DeliveryBoard/DeliveryBoard";
import { Board } from "../containers/Board/Board";

const Index = () => {
  const { products, productError } = useTypedSelector((state) => state.product);
  const { articles, articleError } = useTypedSelector((state) => state.article);

  const getBestSellers = () => products.filter((i) => i.isBestseller);

  return (
    <Layout>
      <>
        <Board />
        <div className={`container ${styles.main_cnt}`}>
          <div className={styles.main_cnt_left}>
            <AsideArticle title={"Artikel"} articles={articles} />
            <PaymentBoard />
            <DeliveryBoard />
          </div>
          <div className={styles.main_cnt_right}>
            <Catalog title={"Bestseller"} bestsellers={getBestSellers()} />
            <FAQ faq={CONTENT.faq} />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchProducts());
    await dispatch(await fetchArticles());
  }
);
