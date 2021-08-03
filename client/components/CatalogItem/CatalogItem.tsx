import styles from "./CatalogItem.module.scss";
import { Button } from "../Button/Button";

export const CatalogItem = ({ name, activeSubstance, description }) => {
  return (
    <div className={styles.catalogItem}>
      <div className={styles.catalogItem_inner}>
        <h3 className={styles.catalogItem_title}>{name}</h3>
        <p className={styles.catalogItem_sub}>{activeSubstance}</p>
        <p className={styles.catalogItem_desc}>{description}</p>
        <div className={styles.catalogItem_down}>
          <div className={styles.catalogItem_down_price}>
            <p>1.28 €</p>
            <span>Pro pile</span>
          </div>
          <Button text={"kaufen"} />
        </div>
      </div>
    </div>
  );
};
