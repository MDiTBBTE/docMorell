import React from "react";
import { Button } from "../../components/Button/Button";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";
import styles from "../../components/BoardTab/BoardTab.module.scss";
import { Board } from "../../containers/Board/Board";
import { fontStyle, height, lineHeight, margin } from "@material-ui/system";
import image from "next/image";
import { StylesProvider } from "@material-ui/core";
import { FormatSize } from "@material-ui/icons";

const Uber = () => {
  return (
    <Layout>
      <div className="container">
        <p style={{ paddingTop: "83px" }}>Home &gt; Über uns </p>
        <div>
          <div
            style={{
              width: "731px",
              textAlign: "center",
              paddingTop: "54px",
              margin: "0 auto",
            }}
          >
            {CONTENT.Uber.map((e) => (
              <div>
                <h2>{e.title}</h2>
                <div>{e.text}</div>
                <div>
                  <Button
                    text={"ZUM ONLINESHOP"}
                    style={{
                      padding: "19px 52px",
                      background: "#3CACFE",
                      borderRadius: "5px",
                      marginTop: "29px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: "93px",
              textAlign: "center",
            }}
          >
            {CONTENT.uberCard.map((p) => (
              <div style={{ width: "33,33%" }}>
                <div
                  className={styles.boardTab_imgWrapper}
                  style={{
                    width: "87px",
                    height: "87px",
                    borderRadius: "100%",
                    boxShadow: "0px 5px 35px rgba(39, 44, 47, 0.1)",
                    margin: "0 auto",
                  }}
                >
                  <img src={`/board/${p.img}`} />
                </div>
                <div style={{ flexDirection: "column", width: "311px" }}>
                  <h3>{p.title}</h3>
                </div>
                <div style={{ flexDirection: "column", width: "311px" }}>
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #E7EAEF" }}>
          <h2 style={{ paddingTop: "198px", paddingBottom: "30px" }}>
            Über Uns
          </h2>
        </div>

        <div
          style={{ paddingTop: "63px", width: "967px", marginBottom: "75px" }}
        >
          {CONTENT.uberUns.map((i) => (
            <div>
              <div>
                <h3
                  style={{
                    margin: "0px",
                    paddingTop: "58px",
                  }}
                >
                  {i.title}
                </h3>
              </div>
              <div style={{ paddingTop: "30px" }}>{i.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Uber;
