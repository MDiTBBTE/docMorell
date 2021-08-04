import { CONTENT } from "../../public/config.lang";
import React, { useState } from "react";
import styles from "./ProductTabs.module.scss";

export const ProductTabs = ({ tab }) => {
  const [prodTab, setProdTab] = useState(null);
  return (
    <div className="container">
      <div className={styles.productTabs_tabs}>
        {CONTENT.productTabNames.map((e, idx) => (
          <div
            key={`${idx.toString()}_${e}`}
            className={`${styles.productTabs_tabs_el} ${
              e.toLowerCase() === tab.toLowerCase() &&
              styles.productTabs_tabs_el_sel
            }`}
          >
            {e}
          </div>
        ))}
      </div>
      {CONTENT.productTabNames[2].toLowerCase() === tab.toLowerCase() && (
        <div className={styles.productTabs_cnt}>
          <h3 className={styles.productTabs_cnt_title}>
            {CONTENT.productTabs[tab.toLowerCase()].title}
          </h3>
          <p className={styles.productTabs_cnt_text}>
            {CONTENT.productTabs[tab.toLowerCase()].text}
          </p>
          <h3 className={styles.productTabs_cnt_titleSide}>
            {CONTENT.productTabs[tab.toLowerCase()].titleSide}
          </h3>
          {CONTENT.productTabs[tab.toLowerCase()].arrSide.map((e, idx) => (
            <div
              key={`${idx.toString()}_${e.title}`}
              className={styles.productTabs_cnt_listSide}
            >
              <h3 className={styles.productTabs_cnt_listSide_title}>
                {e.title}
              </h3>
              <ul className={styles.productTabs_cnt_listSide_list}>
                {e.arr.map((e, idx) => (
                  <li
                    key={`${idx.toString()}_${e}`}
                    className={styles.productTabs_cnt_listSide_list_el}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
