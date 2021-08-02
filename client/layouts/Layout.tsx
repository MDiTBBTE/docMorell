import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
// Constant
import { CONTENT } from "../public/config.lang";

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const [isOpenCategory, setOpenCategory] = useState(false);

  const categories = [
    {
      category: "Erektile Dysfunktion",
      isSelectedCat: true,
      types: [
        {
          name: "Viagra",
          isSelected: false,
        },
        {
          name: "Cialis",
          isSelected: true,
        },
      ],
    },
    {
      category: "Anti-Viral",
      isSelectedCat: false,
      types: [
        {
          name: "Viagra",
          isSelected: false,
        },
        {
          name: "Cialis",
          isSelected: true,
        },
      ],
    },
  ];
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
      <Header tabs={CONTENT.tabs} categories={categories} />
      <div>{children}</div>
      <Footer isWhite={false} tabs={CONTENT.tabs} />
    </>
  );
};

export default Layout;
