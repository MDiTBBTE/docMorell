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
          <div style={{ cursor: "pointer" }}>
            <h3 className={styles.catalogItem_title}>{name}</h3>
            <p className={styles.catalogItem_sub}>{activeSubstance}</p>
            <img
              src={`http://localhost:5000/${packageImage}`}
              alt="product-image"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
        </Link>
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
