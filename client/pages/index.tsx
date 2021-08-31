import React, { useState } from "react";
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
import { fetchCategories } from "../store/actions-creators/category";
import { BestSellersCarousel } from "../components/BestSellersCarousel/BestSellersCarousel";

const Index = () => {
  const { products } = useTypedSelector((state) => state.product);
  const { articles } = useTypedSelector((state) => state.article);
  const { width } = useTypedSelector((state) => state.windowSize);
  const [carousel, setCarousel] = useState({
    page: 0,
  });
  const handleNextPage = () =>
    setCarousel({
      page: carousel.page + 1,
    });

  const handlePrevPage = () =>
    setCarousel({
      page: carousel.page - 1,
    });

  const getBestSellers = () => products.filter((i) => i.isBestseller);

  const getBestSellersForCarousel = () => {
    const split = width <= 768 ? (width <= 480 ? 1 : 2) : 3;

    return getBestSellers().reduce(
      (memo, value, index) => {
        if (index % split === 0 && index !== 0) memo.push([]);
        memo[memo.length - 1].push(value);
        return memo;
      },
      [[]]
    );
  };

  return (
    <Layout width={width}>
      <>
        <Board width={width} />
        <div className={`container ${styles.main_cnt}`}>
          {width >= 1024 && (
            <div className={styles.main_cnt_left}>
              <AsideArticle title={"Artikel"} articles={articles} />
              <PaymentBoard />
              <DeliveryBoard />
            </div>
          )}
          <div className={styles.main_cnt_right}>
            {width >= 1024 ? (
              <Catalog title={"Bestseller"} products={getBestSellers()} />
            ) : (
              <BestSellersCarousel
                title={"Bestseller"}
                products={getBestSellersForCarousel()}
                width={width}
                carousel={carousel}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
              />
            )}
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
    await dispatch(await fetchCategories());
  }
);
