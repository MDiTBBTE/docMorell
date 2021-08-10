import styles from "./DropDown.module.scss";
import { getClassname } from "../../utils/utils";
import { useRouter } from "next/router";

export const DropDown = ({
  category,
  types,
  isSelectedCat,
  handleSetCatMenuFilters,
  handleSetTypeMenuFilters,
}) => {
  const router = useRouter();
  return (
    <div className={styles.dd}>
      <div className={styles.dd_inner}>
        <div
          className={`${styles.dd_inner_header} ${getClassname(
            isSelectedCat,
            styles.dd_inner_header_sel,
            styles.dd_inner_header_notSel
          )}`}
          onClick={() => handleSetCatMenuFilters(category)}
        >
          <img
            className={getClassname(
              isSelectedCat,
              styles.dd_inner_header_img_sel,
              styles.dd_inner_header_img
            )}
            src={isSelectedCat ? "/dd_arrow-white.svg" : "/dd_arrow.svg"}
            alt="arrow"
          />
          <p>{category}</p>
        </div>
        {isSelectedCat && (
          <div className={styles.dd_inner_cnt}>
            {types.map(({ name, isSelected }) => (
              <div
                key={name}
                className={styles.dd_inner_cnt_el}
                onClick={(e) => {
                  e.preventDefault();

                  window.location.pathname !== "/catalog" &&
                    router.push("/catalog");
                  handleSetTypeMenuFilters(name);
                }}
              >
                <img
                  className={`${styles.dd_inner_cnt_el_img} ${getClassname(
                    isSelected,
                    styles.dd_inner_cnt_el_img_sel,
                    styles.dd_inner_cnt_el_img_notSel
                  )}`}
                  src="/dd_arrow.svg"
                  alt="arrow"
                />
                <p>{name}</p>
                <span
                  className={getClassname(
                    isSelected,
                    styles.dd_inner_cnt_el_sel,
                    styles.dd_inner_cnt_el
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
