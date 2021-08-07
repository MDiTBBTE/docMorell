import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { useDispatch } from "react-redux";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

const Uber = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const breadcrumbs = [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Artikel",
        route: "",
      },
    ];
    dispatch(addBreadcrumb(breadcrumbs));
  }, []);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
      </div>
    </Layout>
  );
};

export default Uber;
