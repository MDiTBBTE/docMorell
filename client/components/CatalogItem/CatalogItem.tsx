import styles from "./CatalogItem.module.scss";
import { Button } from "../Button/Button";
import Link from "next/link";

export const CatalogItem = ({
  _id,
  name,
  activeSubstance,
  description,
  packageImage,
}) => {
  return (
    <div className={styles.catalogItem}>
      <div className={styles.catalogItem_inner}>
        <Link href={`/catalog/${_id}`}>
          <div className={styles.catalogItem_up}>
            <h3 className={styles.catalogItem_title}>{name}</h3>
            <p className={styles.catalogItem_sub}>{activeSubstance}</p>
            <img
              className={styles.catalogItem_img}
              src={`http://localhost:5000/${packageImage}`}
              alt="product-image"
            />
          </div>
        </Link>
        <div className={styles.catalogItem_down}>
          <p className={styles.catalogItem_down_desc}>{description}</p>
          <div className={styles.catalogItem_down_info}>
            <div className={styles.catalogItem_down_info_price}>
              <p>1.28 €</p>
              <span>Pro pile</span>
            </div>
            <Button text={"kaufen"} />
          </div>
        </div>
      </div>
    </div>
  );
};
