import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";
import { addBreadcrumb } from "../../store/actions-creators/breadcrumb";
import { useDispatch } from "react-redux";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

const Fragen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const breadcrumbs = [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Häufige Fragen",
        route: "",
      },
    ];
    dispatch(addBreadcrumb(breadcrumbs));
  }, []);

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs />
        <div
          style={{
            width: "731px",
            textAlign: "center",
            paddingTop: "54px",
            margin: "0 auto",
          }}
        >
          {CONTENT.Fragen.map((l) => (
            <div style={{ marginBottom: "100px" }}>
              <h2>{l.title}</h2>
              <div>{l.text}</div>
            </div>
          ))}
        </div>
        <div>
          <h2
            style={{ borderBottom: "1px solid #E7EAEF", paddingBottom: "30px" }}
          >
            Bestellungen & Zahlung
          </h2>
          {CONTENT.FragenCnt.map((s) => (
            <div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "65px",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.secondTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.thirdTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.fourTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.fiveTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.sixTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.sevenTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.eightTitle}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2
            style={{
              borderBottom: "1px solid #E7EAEF",
              paddingBottom: "30px",
              paddingTop: "68px",
            }}
          >
            Lieferung & Abholung
          </h2>
          {CONTENT.SecondFragenCnt.map((s) => (
            <div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "65px",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.secondTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.thirdTitle}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #E7EAEF",
                  paddingBottom: "23px",
                  paddingTop: "18px",
                }}
              >
                {s.fourTitle}
              </div>
            </div>
          ))}
          <div>
            <h2
              style={{
                borderBottom: "1px solid #E7EAEF",
                paddingBottom: "30px",
              }}
            >
              Unsere Dienstleistungen
            </h2>
            {CONTENT.FragenCnt.map((s) => (
              <div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "65px",
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.secondTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.thirdTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.fourTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.fiveTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.sixTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingBottom: "23px",
                    paddingTop: "18px",
                  }}
                >
                  {s.sevenTitle}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #E7EAEF",
                    paddingTop: "18px",
                    paddingBottom: "23px",
                    marginBottom: "25px",
                  }}
                >
                  {s.eightTitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fragen;
