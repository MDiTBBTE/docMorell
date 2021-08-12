import styles from "./BestSellersCarousel.module.scss";
import { CatalogItem } from "../CatalogItem/CatalogItem";

export const BestSellersCarousel = ({
  title,
  products,
  width,
  carousel,
  handleNextPage,
  handlePrevPage,
}) => {
  console.log("carousel", carousel);
  return (
    <div className={styles.bsCarousel}>
      <div className={styles.bsCarousel_inner}>
        <div className={styles.bsCarousel_header}>
          <h2 className={styles.bsCarousel_header_title}>{title}</h2>
          <div className={styles.bsCarousel_header_btns}>
            <button
              className={`${styles.bsCarousel_header_btns_btn} ${
                carousel.page === 0 && styles.bsCarousel_header_btns_btn_disable
              } ${styles.bsCarousel_header_btns_btn_left}`}
              onClick={carousel.page === 0 ? null : handlePrevPage}
            />
            <button
              className={`${styles.bsCarousel_header_btns_btn} ${
                carousel.page === products.length - 1 &&
                styles.bsCarousel_header_btns_btn_disable
              } ${styles.bsCarousel_header_btns_btn_right}`}
              onClick={
                carousel.page === products.length - 1 ? null : handleNextPage
              }
            />
          </div>
        </div>
        <div className={styles.bsCarousel_cnt}>
          {products[carousel.page].map((prod) => (
            <CatalogItem key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  );
};
