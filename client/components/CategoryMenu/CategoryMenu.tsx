import styles from "./CategoryMenu.module.scss";
import { DropDown } from "../DropDown/DropDown";

export const CategoryMenu = ({
  isOpenDD,
  handleOpenCategoryDD,
  categories,
  handleSetCatMenuFilters,
  handleSetTypeMenuFilters,
}) => {
  return (
    <div className={styles.catMenu}>
      <div className={styles.catMenu_inner}>
        <div className={styles.catMenu_header}>
          <p className={styles.catMenu_title}>Kategorien</p>
          {!isOpenDD && (
            <div
              className={styles.catMenu_imgWrapper}
              onClick={handleOpenCategoryDD}
            >
              <img
                className={styles.catMenu_img}
                src="/dd_arrow-black.svg"
                alt="arrow"
              />
            </div>
          )}
        </div>
        {isOpenDD && (
          <div className={styles.catMenu_cnt}>
            {categories.map(({ category, isSelectedCat, types }) => (
              <DropDown
                key={category}
                category={category}
                isSelectedCat={isSelectedCat}
                types={types}
                handleSetCatMenuFilters={handleSetCatMenuFilters}
                handleSetTypeMenuFilters={handleSetTypeMenuFilters}
              />
            ))}
            <div
              className={`${styles.catMenu_imgWrapper} ${styles.catMenu_imgWrapper_open}`}
              onClick={handleOpenCategoryDD}
            >
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
