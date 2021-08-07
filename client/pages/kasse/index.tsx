import styles from "../../styles/Pages/Kasse.module.scss";

import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { useDispatch } from "react-redux";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";
import { CONTENT } from "../../public/config.lang";
import { Input } from "../../components/Input/Input";
import CustomizedCheckbox from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    const breadcrumbs = [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Warenkorb",
        route: "/cart",
      },
      {
        text: "Zur Kasse",
        route: "",
      },
    ];
    dispatch(addBreadcrumb(breadcrumbs));
  }, []);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div>
          <div className={styles.kasse_rech}>
            <h2 className={styles.kasse_rech_title}>
              {CONTENT.kasse.rechnungsadresse.title}
            </h2>
            <div className={styles.kasse_rech_fields}>
              <div className={styles.kasse_rech_fields_l}>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input title={"Vorname:"} isIcon={false} />
                  <Input title={"Nachname:"} isIcon={false} />
                </div>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input title={"Adresse:"} isIcon={false} />
                </div>
                <div className={styles.kasse_rech_fields_l_el_p}>
                  <Input title={"Stadt:"} isIcon={false} />
                  <Input title={"Land:"} isIcon={false} />
                </div>
              </div>
              <div className={styles.kasse_rech_fields_r}>
                <Input title={"E-Mail:"} isIcon={false} />
                <Input title={"Postleitzahl:"} isIcon={false} />
                <Input title={"Handy:"} isIcon={false} />
              </div>
            </div>
            <div className={styles.kasse_delivery}>
              <p className={styles.kasse_delivery_title}>
                {CONTENT.kasse.rechnungsadresse.lieferadresse}
              </p>
              <div className={styles.kasse_delivery_check}>
                <CustomizedCheckbox isChecked={false} />
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
                  <Input title={"Kartennummer:"} isIcon={false} />
                  <div className={styles.kasse_zahl_fields_left_p}>
                    <Input title={"Gültig bis:"} isIcon={false} />
                    <Input title={"Kartennummer:"} isIcon={false} />
                  </div>
                </div>
                <div className={styles.kasse_zahl_fields_right}>
                  <Input title={"CARDHolder name:"} isIcon={false} />
                  <div className={styles.kasse_zahl_fields_right_p}>
                    <Input title={"CVV2:"} isIcon={false} />
                    <Button text={"BEZAHLEN"} />
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
