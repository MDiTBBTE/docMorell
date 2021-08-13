import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchCategories } from "../../store/actions-creators/category";
import styles from "../../styles/Pages/kontakte.module.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

// import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// import CustomizedCheckbox from "../../components/Checkbox/Checkbox";

//  const dispatch = useDispatch();
//  const router = useRouter();

//  const [products, setProducts] = useState([null]);
//  const [isCorrespondedAddress, setCorrespondedAddress] = useState(false);
//   const [order, setOrder] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     emailIndex: "",
//     town: "",
//     country: "",
//     mobile: "",
//     cardNumber: "",
//     cardPeopleName: "",
//     month: "",
//     year: "",
//     cvv: "",
//   });

// const handleEditOrder = (name, value) => {
//   setOrder({ ...order, [name]: value });
// };

//   const handleOrder = () => {
//     // const isEmpty;
//     const orderForBuy = {
//       ...order,
//       expire: `${order.month}/${order.year}`,
//     };
//     console.log(orderForBuy);
// };

//  useEffect(() => {
//    const items = localStorage.getItem("");
//    items ? setProducts(JSON.parse(items)) : router.push("/");
//  }, []);

const Kontakte = () => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div className={styles.kontakte_content}>
          <h2 className={styles.kontakte_styleH2}>Kontakte</h2>
          <div className={styles.kontakte_inputStyles}>
            <div className={styles.kontakte_inputStyles_in1}>
              <Input
                placeholder="Geben Sie Ihren Namen ein, zum Beispiel Yana Svirskaya"
                style={{
                  border: "none",
                  borderBottom: "1px solid #BBC8D4",
                  borderRadius: "0px",
                }}
                title={"Ihr Name"}
                isIcon={false}
              />
            </div>
            <div className={styles.kontakte_inputStyles_in1}>
              <Input
                placeholder="ihreemail@gmal.com"
                style={{
                  border: "none",
                  borderBottom: "1px solid #BBC8D4",
                  borderRadius: "0px",
                }}
                title={"Ihre Email *"}
                isIcon={false}
              />
            </div>
            <div className={styles.kontakte_inputStyles_in1}>
              <Input
                placeholder="22000-67-222-4"
                style={{
                  border: "none",
                  borderBottom: "1px solid #BBC8D4",
                  borderRadius: "0px",
                }}
                title={"Bestellnummer"}
                isIcon={false}
              />
            </div>
            <div className={styles.kontakte_inputStyles_in1}>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #BBC8D4",
                  borderRadius: "0px",
                  height: "176px",
                }}
                title={"Nachricht *"}
                isIcon={false}
              />
            </div>
          </div>
          <div className={styles.kontakte_buttonStyles}>
            <Button
              text={"SENDEN"}
              style={{
                padding: "19px 52px",
                background: "#3CACFE",
                borderRadius: "5px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakte;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
  }
);
