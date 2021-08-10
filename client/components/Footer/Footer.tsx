import React from "react";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

interface IFooterProps {
  isWhite: boolean;
  tabs: string[];
}

const routes = {
  Über: "/uber",
  "Häufige Fragen": "/haufige-fragen",
  Artikel: "/artikel",
  Kontakte: "/kontakte",
};

export const Footer: React.FC<IFooterProps> = ({ isWhite, tabs }) => {
  const bg = isWhite ? "footer-isWhite" : "footer-isGray";
  const router = useRouter();

  return (
    <div className={styles[bg]}>
      <div className={`${"container"} ${styles.footer__inner}`}>
        <div>
          <img
            src="/LOGO.svg"
            alt="Logo DocMorell"
            width="auto"
            height="auto"
          />
          <p className={styles.footer__logo__txt}>
            Copyright © 2021 Alle Rechte vorbehalten
          </p>
        </div>
        <ul className={styles.footer__tabs}>
          {tabs.map((tab) => (
            <li
              key={tab}
              className={styles.footer__tabs_el}
              onClick={() => router.push(routes[tab])}
            >
              {tab}
            </li>
          ))}
        </ul>
        <p className={styles.footer__num}>EU +44-203-308-6749</p>
      </div>
    </div>
  );
};
