import {
  addFilters,
  changeCategories,
} from "../store/actions-creators/category";

export const getClassname = (isSelected, sel, notSel) =>
  `${isSelected ? sel : notSel}`;

export const changeCategoryStructure = (categories) =>
  categories.map(({ title, types }) => {
    const typesArr = types
      .split(",")
      .map((i) => ({ name: i, isSelected: false }));
    return {
      category: title,
      isSelectedCat: false,
      types: typesArr,
    };
  });

export const changeCategoryState = (
  categories,
  action,
  dispatch,
  filters,
  router
) => {
  const { category, type } = filters;
  console.log("filters", filters);
  category &&
    dispatch(
      action(
        categories.map((i) => ({
          ...i,
          isSelectedCat: i.category === category,
        }))
      )
    );

  if (type) {
    sessionStorage.setItem("filters", JSON.stringify(filters));
    dispatch(
      action(
        categories.map((cat) => ({
          ...cat,
          types: cat.types.map((e) => ({
            ...e,
            isSelected: e.name === type,
          })),
        }))
      )
    );
  }
};
