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

export const changeCategoryState = (categories, filters) => {
  const { category, type } = filters;

  return categories
    .map((i) => ({
      ...i,
      isSelectedCat: i.category === category,
    }))
    .map((cat) => ({
      ...cat,
      types: cat.types.map((e) => ({
        ...e,
        isSelected: e.name === type,
      })),
    }));
};
