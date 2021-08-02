import styles from "./DropDown.module.scss";
import { getClassname } from "../../utils/utils";

export const DropDown = ({ category, types, isSelectedCat }) => {
  return (
    <div className={styles.dd}>
      <div className={styles.dd_inner}>
        <div
          className={getClassname(
            isSelectedCat,
            styles.dd_inner_header_sel,
            styles.dd_inner_header
          )}
        >
          <img
            className={getClassname(
              isSelectedCat,
              styles.dd_inner_header_img_sel,
              styles.dd_inner_header_img
            )}
            src="/dd_arrow.svg"
            alt="arrow"
          />
          <p>{category}</p>
        </div>
        {isSelectedCat && (
          <div className={styles.dd_inner_cnt}>
            {types.map(({ name, isSelected }) => (
              <div key={name} className={styles.dd_inner_cnt_el}>
                <img
                  className={getClassname(
                    isSelected,
                    styles.dd_inner_cnt_el_img,
                    styles.dd_inner_cnt_el_img_sel
                  )}
                  src="/dd_arrow.svg"
                  alt="arrow"
                />
                <p>{name}</p>
                <span
                  className={getClassname(
                    isSelected,
                    styles.dd_inner_cnt_el,
                    styles.dd_inner_cnt_el_sel
                  )}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
