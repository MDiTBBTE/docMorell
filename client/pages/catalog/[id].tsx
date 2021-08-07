import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import Layout from "../../layouts/Layout";
import { Button } from "../../components/Button/Button";
import { ProductTabs } from "../../containers/ProductTabs/ProductTabs";

import styles from "../../styles/Pages/Product.module.scss";

const ProductPage = ({ product }) => {
  const router = useRouter();
  const [productState, setProductState] = useState(null);
  const [selDose, setSelDose] = useState(null);

  useEffect(() => {
    const doses = JSON.parse(product.doses);

    const dosesObj = {
      doses: doses,
      dosesList: doses.map((e) => e.dose),
    };

    setProductState({ ...product, ...dosesObj });
    setSelDose(doses[0].dose);
  }, [product]);

  return (
    <Layout>
      {productState && (
        <div className="container">
          <div className={styles.product_inner}>
            <div className={styles.product_info}>
              <div className={styles.product_left}>
                <img
                  src={`http://localhost:5000/${productState.packageImage}`}
                  alt="product-image"
                  style={{
                    width: "320px",
                  }}
                />
              </div>
              <div className={styles.product_right}>
                <h2 className={styles.product_title}>{productState.name}</h2>
                <p className={styles.product_activeSub}>
                  Wirkstoff: {productState.activeSubstance}
                </p>
                <div className={styles.product_table}>
                  <ul className={styles.product_table_doses}>
                    <li className={styles.product_table_doses_el}>
                      Wählen Dosen:
                    </li>
                    {productState.dosesList.map((e) => (
                      <li
                        key={e}
                        className={`${styles.product_table_doses_el} ${
                          e === selDose && styles.product_table_doses_el_sel
                        }`}
                      >
                        {e}mg
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.product_table_dosesList}>
                    {productState.doses
                      .find((e) => e.dose === selDose)
                      .packages.map((e) => (
                        <li
                          key={e.price}
                          className={styles.product_table_dosesList_el}
                        >
                          <div
                            className={styles.product_table_dosesList_el_input}
                          >
                            <input type="checkbox" />
                          </div>
                          <div
                            className={styles.product_table_dosesList_el_amount}
                          >
                            <p>{selDose}mg</p>
                            <span>{e.count} Pillen</span>
                          </div>
                          <div
                            className={styles.product_table_dosesList_el_one}
                          >
                            <p>{e.onePill}€</p>
                            <span>pro Tabletten</span>
                          </div>
                          <div
                            className={styles.product_table_dosesList_el_old}
                          >
                            <p>
                              {e.oldPrice}
                              {e.oldPrice && "€"}
                            </p>
                          </div>
                          <div
                            className={styles.product_table_dosesList_el_new}
                          >
                            <p>{e.price}€</p>
                            <span>+ Bonus - {e.bonus} Pills</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <Button
                  text={"ZUM WARENKORB HINZUFÜGENIN"}
                  style={{ marginTop: "24px", width: "100%" }}
                />
              </div>
            </div>
            <ProductTabs tab={"Nebenwirkungen"} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("params.id", params.id);
  const response = await axios.get(
    "http://localhost:5000/product/" + params.id
  );

  return {
    props: {
      product: response.data,
    },
  };
};
