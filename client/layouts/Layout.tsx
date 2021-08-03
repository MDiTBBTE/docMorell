import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CONTENT } from "../public/config.lang";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useRouter } from "next/router";
import {
  addFilters,
  changeCategories,
} from "../store/actions-creators/category";
import { useDispatch } from "react-redux";
import { changeCategoryState } from "../utils/utils";

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const dispatch = useDispatch();
  // redux
  const { changedCategories } = useTypedSelector((state) => state.category);
  // state
  const router = useRouter();
  const [isOpenCategoryDD, setOpenCategoryDD] = useState(true);
  const [menuFilters, setMenuFilters] = useState({
    category: "",
    type: "",
  });
  // open menu
  const handleOpenCategoryDD = () => setOpenCategoryDD(!isOpenCategoryDD);
  //add menu options
  const handleSetCatMenuFilters = (category: string) => {
    setMenuFilters({ ...menuFilters, category: category });
  };
  const handleSetTypeMenuFilters = (type: string) => {
    setMenuFilters({ ...menuFilters, type: type });
  };

  useEffect(() => {
    changeCategoryState(
      changedCategories,
      changeCategories,
      dispatch,
      menuFilters,
      router
    );
  }, [isOpenCategoryDD, menuFilters]);

  useEffect(() => {
    const filters = sessionStorage.getItem("filters");
    console.log("filters", filters ? "t" : "f");
    console.log("filters", JSON.parse(filters));
    filters && setMenuFilters(JSON.parse(filters));
  }, []);
  console.log("changedCategories", changedCategories);
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
      <Header
        tabs={CONTENT.tabs}
        categories={changedCategories}
        isOpenCategoryDD={isOpenCategoryDD}
        handleOpenCategoryDD={handleOpenCategoryDD}
        handleSetCatMenuFilters={handleSetCatMenuFilters}
        handleSetTypeMenuFilters={handleSetTypeMenuFilters}
      />
      <div>{children}</div>
      <Footer isWhite={false} tabs={CONTENT.tabs} />
    </>
  );
};

export default Layout;
