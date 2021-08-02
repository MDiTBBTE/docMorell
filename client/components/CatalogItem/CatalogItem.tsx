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

// activeSubstance: "Sildenafil"
// description: "Viagra restores potency in men who are not able to gain or maintain erection on the needed level..."
// doses: "\"[{'dose':25,'packages':[{'count':10,'onePill':1.85,'price':18.45,'oldPrice':null,'bonus':4},{'count':20,'onePill':1.68,'price':33.56,'oldPrice':44.46,'bonus':4}]}]\""
// isBestseller: true
// name: "Viagra Tabletten "
