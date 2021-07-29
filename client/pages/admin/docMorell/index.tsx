import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { NextThunkDispatch, wrapper } from "../../../store";
import { fetchCategories } from "../../../store/actions-creators/category";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchArticles } from "../../../store/actions-creators/article";
import { fetchProducts } from "../../../store/actions-creators/product";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

export default function Index() {
  const classes = useStyles();
  const { categories, error } = useTypedSelector((state) => state.category);
  const { articles, articleError } = useTypedSelector((state) => state.article);
  const { products, productError } = useTypedSelector((state) => state.product);

  if (error) {
    return (
      <div>
        <h1>{error || articleError || productError}</h1>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <h2>Категории</h2>
      {categories.map(({ title, types }) => (
        <div>
          {title}
          <div>
            {types.split(",").map((type) => (
              <p>{type}</p>
            ))}
          </div>
        </div>
      ))}
      <h2>Статти</h2>
      {articles.map(({ title, text, date, picture }) => (
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
          <p>{date}</p>
          <img width={250} src={`http://localhost:5000/${picture}`} alt="" />
        </div>
      ))}
      <h2>Товары</h2>
      {products.map(
        ({
          name,
          type,
          description,
          isBestseller,
          activeSubstance,
          doses,
          pillImage,
          packageImage,
        }) => (
          <div>
            <h4>Имя: {name}</h4>
            <p>Тип: {type}</p>
            <p>Описание: {description}</p>
            <p>Бестселлер: {isBestseller}</p>
            <p>Активное вещиство: {activeSubstance}</p>
            <p>Дозы: {doses}</p>
            <div>
              <h5>Картинка таблетки</h5>
              <img
                width={250}
                src={`http://localhost:5000/${pillImage}`}
                alt=""
              />
            </div>
            <div>
              <h5>Картинка упаковки</h5>
              <img
                width={250}
                src={`http://localhost:5000/${packageImage}`}
                alt=""
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchCategories());
    await dispatch(await fetchArticles());
    await dispatch(await fetchProducts());
  }
);
