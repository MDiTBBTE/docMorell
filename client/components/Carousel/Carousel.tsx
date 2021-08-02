import styles from "./Carousel.module.scss";
import { Button } from "../Button/Button";
import { getClassname } from "../../utils/utils";

export const Carousel = ({
  selItem,
  dots,
  handleNextClick,
  handleChooseClick,
}) => {
  return (
    <div>
      <div className={styles.carousel_inner}>
        <img
          className={styles.carousel_bg}
          src={`/carousel/${selItem.img}`}
          alt="carousel-icon"
        />
        <div className={styles.carousel_cnt}>
          <h3>{selItem.title}</h3>
          <p>{selItem.text}</p>
          <Button
            text={"Jetzt kaufen"}
            style={{ padding: "19px 52px", background: "#FF6B03" }}
          />
          <div className={styles.carousel_dots}>
            {dots.map(({ id, isSelected }) => (
              <div
                key={id}
                onClick={() => handleChooseClick(id)}
                className={`${styles.carousel_dots_el} ${getClassname(
                  isSelected,
                  styles.carousel_dots_el_sel,
                  styles.carousel_dots_el_notSel
                )}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.carousel_btns}>
          <button
            className={styles.carousel_btns_right}
            onClick={handleNextClick}
          >
            <img src="/dd_arrow-black.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
