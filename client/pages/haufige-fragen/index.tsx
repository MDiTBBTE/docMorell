import React from "react";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";
import styles from "../../styles/Pages/fragen.module.scss";

const Fragen = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.fragen_content}>
          {CONTENT.Fragen.map((l) => (
            <div>
              <h2>{l.title}</h2>
              <div style={{ marginBottom: "71px" }}>{l.text}</div>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.fragen_title}>
            <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
          </div>
          {CONTENT.FragenCnt.cnt.map((s) => (
            <div className={styles.fragen_questions}>{s.title}</div>
          ))}
        </div>

        <div className={styles.fragen_titleSecond}>
          <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
        </div>
        {CONTENT.FragenCnt.LieferungCnt.map((s) => (
          <div className={styles.fragen_questionsSecond}>{s.title}</div>
        ))}
        <div className={styles.fragen_titleThord}>
          <div>
            <h2 className={styles.fragen_stylesH2}>Bestellungen & Zahlung</h2>
          </div>
          {CONTENT.FragenCnt.UnserfCnt.map((s) => (
            <div className={styles.fragen_questionsThord}>{s.title}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fragen;
