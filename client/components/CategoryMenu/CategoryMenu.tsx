import styles from "./CategoryMenu.module.scss";
import { DropDown } from "../DropDown/DropDown";

export const CategoryMenu = ({ isOpen, categories }) => {
  return (
    <div className={styles.catMenu}>
      <div className={styles.catMenu_inner}>
        <div className={styles.catMenu_header}>
          <p className={styles.catMenu_title}>Kategorien</p>
          {!isOpen && (
            <div className={styles.catMenu_imgWrapper}>
              <img
                className={styles.catMenu_img}
                src="/dd_arrow-black.svg"
                alt="arrow"
              />
            </div>
          )}
        </div>
        {isOpen && (
          <div className={styles.catMenu_cnt}>
            {categories.map(({ category, isSelectedCat, types }) => (
              <DropDown
                key={category}
                category={category}
                isSelectedCat={isSelectedCat}
                types={types}
              />
            ))}
            <div className={styles.catMenu_imgOpenWrapper}>
              <img
                className={styles.catMenu_imgOpen}
                src="/dd_arrow-black.svg"
                alt="arrow"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
