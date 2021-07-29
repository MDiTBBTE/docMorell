import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/admin/Header";
import WebSitesList from "../../components/admin/List";

const Index = () => {
  const router = useRouter();
  const redir = () => router.push("/tracks");
  return (
    <>
      <Header auth={true} />
      <WebSitesList servers={[{ name: "DocMorell", link: "" }]} />
    </>
  );
};

export default Index;
