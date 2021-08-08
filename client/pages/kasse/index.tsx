import styles from "../../styles/Pages/Kasse.module.scss";

import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { useDispatch } from "react-redux";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CONTENT } from "../../public/config.lang";
import { Input } from "../../components/Input/Input";
import CustomizedCheckbox from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { useRouter } from "next/router";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [products, setProducts] = useState([null]);
  const [isCorrespondedAddress, setCorrespondedAddress] = useState(false);
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    emailIndex: "",
    town: "",
    country: "",
    mobile: "",
    cardNumber: "",
    cardPeopleName: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleEditOrder = (name, value) => {
    setOrder({ ...order, [name]: value });
  };

  const handleOrder = () => {
    // const isEmpty;
    const orderForBuy = {
      ...order,
      expire: `${order.month}/${order.year}`,
    };
    console.log(orderForBuy);
  };

  useEffect(() => {
    const items = localStorage.getItem("cart");
    items ? setProducts(JSON.parse(items)) : router.push("/");
  }, []);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div>
          <div className={styles.kasse_main}>
            <h2 className={styles.kasse_main_title}>Zur Kasse</h2>
            {products && (
              <div className={styles.kasse_main_cnt}>
                <div className={styles.kasse_main_cnt_header}>
                  <p className={styles.kasse_main_cnt_header_el}>Product</p>
                  <p className={styles.kasse_main_cnt_header_el}>Quantity</p>
                  <p className={styles.kasse_main_cnt_header_el}>Price</p>
                </div>
                <ul className={styles.kasse_main_cnt_list}>
                  {products.map((e, idx) => (
                    <li
                      key={`${idx.toString()}`}
                      className={styles.kasse_main_cnt_list_el}
                    >
                      <div className={styles.kasse_main_cnt_list_el_p}>
                        <div className={styles.kasse_main_cnt_list_el_p_info}>
                          <h3
                            className={
                              styles.kasse_main_cnt_list_el_p_info_title
                            }
                          >
                            Viagra Tabletten (Sildenafil) 100 Pillen x 25 mg{" "}
                          </h3>
                        </div>
                      </div>
                      <div className={styles.kasse_main_cnt_list_el_p}>
                        <img src="/minus.svg" alt="" />
                        <p className={styles.kasse_main_cnt_list_el_p_amount}>
                          1
                        </p>
                        <img src="/plus.svg" alt="" />
                      </div>
                      <div className={styles.kasse_main_cnt_list_el_p}>
                        <p className={styles.kasse_main_cnt_list_el_p_price}>
                          93.56€
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.kasse_main_cnt_footer}>
              <p
                className={styles.kasse_main_cnt_footer_cart}
                onClick={() => router.push("/cart")}
              >
                Edit order
              </p>
              <p className={styles.kasse_main_cnt_footer_price}>
                Total: 149,12€{" "}
              </p>
            </div>
          </div>
          <div className={styles.kasse_rech}>
            <h2 className={styles.kasse_rech_title}>
              {CONTENT.kasse.rechnungsadresse.title}
            </h2>
            <div className={styles.kasse_rech_fields}>
              <div className={styles.kasse_rech_fields_l}>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input
                    title={"Vorname:"}
                    isIcon={false}
                    value={order.firstName}
                    handleChange={(value) =>
                      handleEditOrder("firstName", value)
                    }
                  />
                  <Input
                    title={"Nachname:"}
                    isIcon={false}
                    value={order.lastName}
                    handleChange={(value) => handleEditOrder("lastName", value)}
                  />
                </div>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input
                    title={"Adresse:"}
                    isIcon={false}
                    value={order.address}
                    handleChange={(value) => handleEditOrder("address", value)}
                  />
                </div>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input
                    title={"Stadt:"}
                    isIcon={false}
                    value={order.town}
                    handleChange={(value) => handleEditOrder("town", value)}
                  />
                  <Input
                    title={"Land:"}
                    isIcon={false}
                    value={order.country}
                    handleChange={(value) => handleEditOrder("country", value)}
                  />
                </div>
              </div>
              <div className={styles.kasse_rech_fields_r}>
                <Input
                  title={"E-Mail:"}
                  isIcon={false}
                  value={order.email}
                  handleChange={(value) => handleEditOrder("email", value)}
                  type={"email"}
                />
                <Input
                  title={"Postleitzahl:"}
                  isIcon={false}
                  value={order.emailIndex}
                  handleChange={(value) => handleEditOrder("emailIndex", value)}
                />
                <Input
                  title={"Handy:"}
                  isIcon={false}
                  value={order.mobile}
                  handleChange={(value) => handleEditOrder("mobile", value)}
                />
              </div>
            </div>
            <div className={styles.kasse_delivery}>
              <p className={styles.kasse_delivery_title}>
                {CONTENT.kasse.rechnungsadresse.lieferadresse}
              </p>
              <div
                className={styles.kasse_delivery_check}
                onClick={() => setCorrespondedAddress(!isCorrespondedAddress)}
              >
                <CustomizedCheckbox isChecked={isCorrespondedAddress} />
                <p className={styles.kasse_delivery_check_text}>
                  {CONTENT.kasse.rechnungsadresse.text}
                </p>
              </div>
            </div>
            <div className={styles.kasse_zahl}>
              <h2 className={styles.kasse_zahl_title}>
                {"Zahlungsinformationen"}
              </h2>
              <div className={styles.kasse_zahl_fields}>
                <div className={styles.kasse_zahl_fields_left}>
                  <Input
                    title={"Kartennummer:"}
                    isIcon={false}
                    value={order.cardNumber}
                    handleChange={(value) =>
                      handleEditOrder("cardNumber", value)
                    }
                  />
                  <div className={styles.kasse_zahl_fields_left_p}>
                    <Input
                      title={"Gültig bis:"}
                      isIcon={false}
                      value={order.month}
                      handleChange={(value) => handleEditOrder("month", value)}
                      maxLength={2}
                    />
                    <Input
                      title={""}
                      isIcon={false}
                      value={order.year}
                      handleChange={(value) => handleEditOrder("year", value)}
                      maxLength={2}
                    />
                  </div>
                </div>
                <div className={styles.kasse_zahl_fields_right}>
                  <Input
                    title={"CARDHolder name:"}
                    isIcon={false}
                    value={order.cardPeopleName}
                    handleChange={(value) =>
                      handleEditOrder("cardPeopleName", value)
                    }
                  />
                  <div className={styles.kasse_zahl_fields_right_p}>
                    <Input
                      title={"CVV2:"}
                      isIcon={false}
                      value={order.cvv}
                      handleChange={(value) => handleEditOrder("cvv", value)}
                      maxLength={3}
                    />
                    <Button
                      text={"BEZAHLEN"}
                      style={{ padding: "20px 96px" }}
                      handleClick={handleOrder}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
  }
);
