import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import Layout from "../../layouts/Layout";
import { Button } from "../../components/Button/Button";
import { ProductTabs } from "../../containers/ProductTabs/ProductTabs";

import styles from "../../styles/Pages/Product.module.scss";
import { addFilters } from "../../store/actions-creators/category";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CustomizedCheckbox from "../../components/Checkbox/Checkbox";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { changeCart } from "../../store/actions-creators/cart";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { filters } = useTypedSelector((state) => state.category);
  const { carts } = useTypedSelector((state) => state.cart);

  const [productState, setProductState] = useState(null);
  const [selDose, setSelDose] = useState(null);
  console.log("cart", carts && carts);
  const handleSelDose = (dose) => setSelDose(dose);

  const handleOrder = () => {
    const cartLS = localStorage.getItem("cart");
    const cart = cartLS
      ? JSON.parse(cartLS).map((e) =>
          e._id === productState._id ? productState : e
        )
      : [productState];
    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(changeCart(cart));

    router.push("/cart");
  };

  const handleSelPackages = (count) => {
    const selArr = [];

    const dosesObj = {
      doses: productState.doses.map((d) =>
        d.dose === selDose
          ? {
              ...d,
              packages: d.packages.map((e) => {
                e.count === count && selArr.push({ ...d, packages: [e] });
                return {
                  ...e,
                  isSelected: e.count === count,
                };
              }),
            }
          : {
              ...d,
              packages: d.packages.map((e) => ({
                ...e,
                isSelected: false,
              })),
            }
      ),
      dosesList: productState.doses.map((e) => e.dose),
    };

    setProductState({ ...product, ...dosesObj });
  };

  useEffect(() => {
    const doses = JSON.parse(product.doses);

    const dosesObj = {
      doses: doses.map((e) => ({
        ...e,
        packages: e.packages.map((e) => ({ ...e, isSelected: false })),
      })),
      dosesList: doses.map((e) => e.dose),
    };

    setProductState({ ...product, ...dosesObj });
    setSelDose(doses[0].dose);
  }, [product]);

  useEffect(() => {
    const category = sessionStorage.getItem("category");
    const type = sessionStorage.getItem("type");

    if (category || type) {
      dispatch(addFilters({ category: category, type: type }));
    }
  }, [filters.type]);

  useEffect(() => {
    const type = sessionStorage.getItem("type");

    if (productState) {
      const breadcrumbs = [
        {
          text: "Home",
          route: "/",
        },
        {
          text: type,
          route: "/catalog",
        },
        {
          text: productState.name,
          route: "",
        },
      ];
      dispatch(addBreadcrumb(breadcrumbs));
    }
  }, [productState]);
  console.log("productState", productState);
  return (
    <Layout>
      {productState && (
        <div className="container">
          <Breadcrumbs />
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
                        onClick={() => handleSelDose(e)}
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
                          onClick={() => handleSelPackages(e.count)}
                        >
                          <div
                            className={styles.product_table_dosesList_el_input}
                          >
                            <CustomizedCheckbox isChecked={e.isSelected} />
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
                  handleClick={handleOrder}
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
