import { useEffect, useState } from "react";
import { changeWindowSize } from "../store/actions-creators/windwoSize";

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

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      changeWindowSize(windowSize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};
