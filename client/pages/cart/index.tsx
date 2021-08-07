import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Layout from "../../layouts/Layout";
import styles from "../../styles/Pages/Cart.module.scss";
import { addFilters } from "../../store/actions-creators/category";
import { useDispatch } from "react-redux";
import { CONTENT } from "../../public/config.lang";
import CustomizedCheckbox from "../../components/Checkbox/Checkbox";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useRouter } from "next/router";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    filters: { type },
  } = useTypedSelector((state) => state.category);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const category = sessionStorage.getItem("category");
    const type = sessionStorage.getItem("type");

    if (category || type) {
      dispatch(addFilters({ category: category, type: type }));
    }
  }, [type]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    items ? setProducts(JSON.parse(items)) : router.push("/");

    const breadcrumbs = [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Warenkorb",
        route: "/cart",
      },
    ];
    dispatch(addBreadcrumb(breadcrumbs));
  }, []);

  console.log("products", products);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div style={{ width: "85%", margin: "0 auto" }}>
          <h2 className={styles.cart_title}>{CONTENT.cart.title}</h2>
          {products && (
            <div className={styles.cart_products}>
              <div className={styles.cart_products_header}>
                <p className={styles.cart_products_header_el}>Product</p>
                <p className={styles.cart_products_header_el}>Quantity</p>
                <p className={styles.cart_products_header_el}>Price</p>
              </div>
              <ul className={styles.cart_products_list}>
                {products.map((e) => (
                  <li className={styles.cart_products_list_el}>
                    <div className={styles.cart_products_list_el_p}>
                      <img
                        className={styles.cart_products_list_el_p_img}
                        src="/pills/viagra.svg"
                        alt=""
                      />
                      <div className={styles.cart_products_list_el_p_info}>
                        <h3
                          className={styles.cart_products_list_el_p_info_title}
                        >
                          Viagra Tabletten (Sildenafil) 100 Pillen x 25 mg{" "}
                        </h3>
                        <p className={styles.cart_products_list_el_p_info_text}>
                          0.93€ pro Tabletten
                        </p>
                        <span
                          className={styles.cart_products_list_el_p_info_price}
                        >
                          93.56€
                        </span>
                      </div>
                    </div>
                    <div className={styles.cart_products_list_el_p}>
                      <img src="/minus.svg" alt="" />
                      <p className={styles.cart_products_list_el_p_amount}>1</p>
                      <img src="/plus.svg" alt="" />
                    </div>
                    <div className={styles.cart_products_list_el_p}>
                      <p>93.56€</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.cart_shipping}>
            <div className={styles.cart_shipping_inner}>
              <h3 className={styles.cart_shipping_title}>
                {CONTENT.cart.shippingMethodTitle}
              </h3>
              {CONTENT.cart.shippingMethod.map((e) => (
                <div className={styles.cart_shipping_list_el}>
                  <CustomizedCheckbox isChecked={false} />
                  <div>
                    <div className={styles.cart_shipping_header}>
                      <p className={styles.cart_shipping_header_title}>
                        {" "}
                        {e.title}
                      </p>
                      <span className={styles.cart_shipping_header_price}>
                        {e.price}
                      </span>
                    </div>
                    <div className={styles.cart_shipping_cnt}>
                      <p>{e.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cart_gutschein}>
            <h2 className={styles.cart_gutschein_title}>
              {CONTENT.cart.gutschein.title}
            </h2>
            <div className={styles.cart_gutschein_cnt}>
              <Input
                isIcon={false}
                placeholder={CONTENT.cart.gutschein.placeHolder}
                style={{ height: "56px" }}
              />
              <Button
                text={CONTENT.cart.gutschein.btnName}
                style={{
                  background: "#fff",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#3CACFE",
                  border: "2px solid #3CACFE",
                  padding: "17px 65px",
                  marginLeft: "12px",
                }}
              />
            </div>
          </div>
          <div className={styles.cart_options}>
            <p
              className={styles.cart_options_link}
              onClick={() => router.push("/catalog")}
            >
              {CONTENT.cart.textToShopping}
            </p>
            <div className={styles.cart_options_cart}>
              <p className={styles.cart_options_cart_price}>Total: 149,12€ </p>
              <Button
                text={CONTENT.cart.btnToKass}
                style={{ padding: "22px 61px" }}
                handleClick={() => router.push("/kasse")}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
