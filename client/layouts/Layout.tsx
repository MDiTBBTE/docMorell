import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CONTENT } from "../public/config.lang";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  addFilters,
  changeCategories,
} from "../store/actions-creators/category";
import { useDispatch } from "react-redux";
import { changeCategoryState } from "../utils/utils";
import { changeCart } from "../store/actions-creators/cart";
import { useRouter } from "next/router";

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { changedCategories, filters } = useTypedSelector(
    (state) => state.category
  );
  const { carts } = useTypedSelector((state) => state.cart);

  const [isOpenCategoryDD, setOpenCategoryDD] = useState(false);
  const handleOpenCategoryDD = () => setOpenCategoryDD(!isOpenCategoryDD);

  const handleSetCatMenuFilters = (category: string) => {
    sessionStorage.setItem("category", category);
    dispatch(addFilters({ category: category }));
    dispatch(
      changeCategories(
        changedCategories.map((i) => ({
          ...i,
          isSelectedCat: i.category === category,
        }))
      )
    );
  };

  const handleSetTypeMenuFilters = (type: string) => {
    sessionStorage.setItem("type", type);
    dispatch(addFilters({ type: type }));
    dispatch(
      changeCategories(
        changedCategories.map((cat) => ({
          ...cat,
          types: cat.types.map((e) => ({
            ...e,
            isSelected: e.name === type,
          })),
        }))
      )
    );
  };

  useEffect(() => {
    const category = sessionStorage.getItem("category");
    const type = sessionStorage.getItem("type");

    if (category || type) {
      dispatch(
        changeCategories(
          changeCategoryState(changedCategories, { category, type })
        )
      );
      dispatch(addFilters({ category: category, type: type }));
    }
  }, [filters.type, isOpenCategoryDD]);

  useEffect(() => {
    if (
      window.location.pathname.split("/")[1] === "" ||
      window.location.pathname.split("/")[1] === "catalog"
    ) {
      setOpenCategoryDD(true);
    }

    const cartLS = localStorage.getItem("cart");
    cartLS && dispatch(changeCart(JSON.parse(cartLS)));
  }, [isOpenCategoryDD, router]);

  return (
    <>
      <Head>
        <title>{title || "DocMorell"}</title>
        {/*<meta*/}
        {/*  name="description"*/}
        {/*  content={*/}
        {/*    `Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` +*/}
        {/*    description*/}
        {/*  }*/}
        {/*/>*/}
        <meta name="robots" content="index, follow" />
        {/*<meta name="keywords" content={keywords || "Музыка, треки, артисты"} />*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {filters && (
        <Header
          tabs={CONTENT.tabs}
          categories={changedCategories}
          isOpenCategoryDD={isOpenCategoryDD}
          handleOpenCategoryDD={handleOpenCategoryDD}
          handleSetCatMenuFilters={handleSetCatMenuFilters}
          handleSetTypeMenuFilters={handleSetTypeMenuFilters}
          itemsCount={carts ? carts.length : 0}
        />
      )}
      <div>{children}</div>
      <Footer isWhite={false} tabs={CONTENT.tabs} />
    </>
  );
};

export default Layout;
