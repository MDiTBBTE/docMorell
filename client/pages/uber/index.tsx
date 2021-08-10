import React, { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";
import styles from "../../styles/Pages/Uber.module.scss";
import { NextThunkDispatch, wrapper } from "../../store/index";

import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { fetchCategories } from "../../store/actions-creators/category";
import { fetchArticles } from "../../store/actions-creators/article";

const Uber = () => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div className={styles.uber_content}>
          <div>
            {CONTENT.Uber.map((e) => (
              <div className={styles.uber_stylesFirstText}>
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "35px",
                  }}
                >
                  {e.title}
                </h2>
                <div
                  style={{
                    fontWeight: "normal",
                    fontSize: "17px",
                    lineHeight: "26px",
                  }}
                >
                  {e.text}
                </div>
                <div>
                  <Button
                    text={"ZUM ONLINESHOP"}
                    style={{
                      padding: "19px 52px",
                      background: "#3CACFE",
                      borderRadius: "5px",
                      marginTop: "29px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.uber_imgCards}>
            {CONTENT.uberCard.map((p) => (
              <div className={styles.uber_container}>
                <div className={styles.uber_imgWrapper}>
                  <img className={styles.uber_img} src={`/board/${p.img}`} />
                </div>
                <div className={styles.uber_stylesText}>
                  <h3
                    style={{
                      fontWeight: 500,
                      fontSize: "23px",
                      lineHeight: "27px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <div
                    style={{
                      fontWeight: "normal",
                      fontSize: "17px",
                      lineHeight: "26px",
                    }}
                  >
                    {p.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.uber_questions}>
            <h2 className={styles.uber_h2}>Über Uns</h2>
            <div className={styles.uber_info}>
              {CONTENT.uberUns.map((i) => (
                <div>
                  <h3 className={styles.uber_h3}>{i.title}</h3>
                  <div className={styles.uber_infoText}>{i.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Uber;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
    await dispatch(await fetchArticles());
  }
);
