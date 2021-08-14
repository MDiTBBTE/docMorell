import React from "react";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";
import styles from "../../styles/Pages/fragen.module.scss";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";

const Fragen = () => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        {CONTENT.Fragen.map((l) => (
          <div className={styles.fragen_container}>
            <h2 className={styles.fragen_container_h2}>{l.title}</h2>
            <div className={styles.fragen_container_h2_p}>{l.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.fragen_contQuestions}>
        <div className={styles.fragen_title}>
          <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
        </div>
        {CONTENT.FragenCnt.cnt.map((s) => (
          <div className={styles.fragen_questions}>{s.title}</div>
        ))}
        <div className={styles.fragen_titleSecond}>
          <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
        </div>
        {CONTENT.FragenCnt.LieferungCnt.map((s) => (
          <div className={styles.fragen_questionsSecond}>{s.title}</div>
        ))}
        <div className={styles.fragen_titleThord}>
          <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
          {CONTENT.FragenCnt.UnserfCnt.map((s) => (
            <div className={styles.fragen_questionsThord}>{s.title}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fragen;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
  }
);
