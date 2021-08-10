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
import { addBreadcrumb } from "../store/actions-creators/breadcrumb";
import { breadcrumbs as BREADCRUMBS } from "../constants/constants";
import {
  deleteSearchedProducts,
  searchProducts,
} from "../store/actions-creators/product";
import { NextThunkDispatch } from "../store";

const Layout = ({ children }) => {
  const dispatch = useDispatch() as NextThunkDispatch;
  const router = useRouter();

  const { searchedProducts } = useTypedSelector((state) => state.product);
  const { changedCategories, filters } = useTypedSelector(
    (state) => state.category
  );
  const { carts } = useTypedSelector((state) => state.cart);
  const { breadcrumbs } = useTypedSelector((state) => state.breadcrumb);

  const [isOpenCategoryDD, setOpenCategoryDD] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    sessionStorage.setItem("query", value);
  };

  const handleSearchRequest = async () => {
    await dispatch(await searchProducts(query));
    sessionStorage.setItem("category", "");
    sessionStorage.setItem("type", "");
    setOpenCategoryDD(false);

    dispatch(addFilters({ category: "", type: "" }));
    dispatch(
      changeCategories(
        changedCategories.map((cat) => ({
          ...cat,
          isSelectedCat: false,
          types: cat.types.map((e) => ({
            ...e,
            isSelected: false,
          })),
        }))
      )
    );
  };

  const handleOpenCategoryDD = () => setOpenCategoryDD(!isOpenCategoryDD);

  const handleSetCatMenuFilters = (category: string) => {
    setQuery("");
    sessionStorage.setItem("query", "");
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
    sessionStorage.setItem("query", "");
    setQuery("");
    dispatch(deleteSearchedProducts());

    dispatch(addBreadcrumb(null));

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
    const rou = window.location.pathname.split("/");
    const type = sessionStorage.getItem("type");
    const query = sessionStorage.getItem("query");

    if (
      (rou[1] === "" && rou[0] === "") ||
      (rou.length !== 3 && rou[1] === "catalog")
    ) {
      setOpenCategoryDD(!query);
    }

    const cartLS = localStorage.getItem("cart");
    cartLS && dispatch(changeCart(JSON.parse(cartLS)));

    if (rou.length !== 3) {
      breadcrumbs === null &&
        dispatch(addBreadcrumb(BREADCRUMBS(query || type)[rou[1]]));
    }
  }, [router, filters.type, breadcrumbs]);

  useEffect(() => {
    const query = sessionStorage.getItem("query");
    const rou = window.location.pathname.split("/");

    if (query) {
      setQuery(query);
      searchedProducts === null && rou.length !== 3 && handleSearchRequest();
    }
  }, [searchedProducts, query]);

  return (
    <>
      <Head>
        <title>Doc Morell</title>
        <meta
          name="description"
          content="Die beste apotheke. Hier findet jeder was er will. Die besten Tabletten der Welt."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Pillen, Viagra, Apotheke, Geschäft, Cialis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/Robotto/Robotto.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat.ttf"
          as="font"
          crossOrigin=""
        />
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
          query={query}
          handleSearch={handleSearch}
          handleSearchRequest={handleSearchRequest}
        />
      )}
      <div>{children}</div>
      <Footer isWhite={false} tabs={CONTENT.tabs} />
    </>
  );
};

export default Layout;
