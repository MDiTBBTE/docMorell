import { CatalogItem } from "../../components/CatalogItem/CatalogItem";
import styles from "./Catalog.module.scss";

export const Catalog = ({ title, products }) => {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalog_title}>{title}</h2>
      <div className={styles.catalog_cnt}>
        <div className={styles.catalog_cnt_inner}>
          {products.map((item) => (
            <CatalogItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
