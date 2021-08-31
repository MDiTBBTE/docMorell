// Core
import React from "react";
// Comp
import { Input } from "../Input/Input";
// Styles
import styles from "./Header.module.scss";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { useRouter } from "next/router";

interface IHeaderProps {
  tabs: string[];
  itemsCount?: number;
  itemsCountPrice?: number;
  categories: {}[];
  isOpenCategoryDD: boolean;
  handleOpenCategoryDD: () => void;
  handleSearchRequest: () => void;
  handleSetCatMenuFilters: (category: string) => void;
  handleSetTypeMenuFilters: (type: string) => void;
  query: string;
  width: number;
  handleSearch: (type: string) => void;
}

const routes = {
  Über: "/uber",
  "Häufige Fragen": "/haufige-fragen",
  Artikel: "/artikel",
  Kontakte: "/kontakte",
};

export const Header: React.FC<IHeaderProps> = ({
  tabs,
  itemsCount = 0,
  itemsCountPrice = 0,
  categories,
  isOpenCategoryDD,
  handleOpenCategoryDD,
  handleSetCatMenuFilters,
  handleSetTypeMenuFilters,
  query,
  handleSearch,
  handleSearchRequest,
  width,
}) => {
  const router = useRouter();

  return (
    <div>
      <div className={`container ${styles.header__inner}`}>
        <div className={styles.header__inner__up}>
          <img
            src={`${width <= 768 ? "/LOGO_mob.svg" : "/LOGO.svg"}`}
            alt="Logo DocMorell"
            width="auto"
            height="auto"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
          <Input
            placeholder={"Suche mit Name"}
            style={{ height: "51px", width: width <= 768 ? "140px" : "300px" }}
            value={query}
            handleChange={handleSearch}
            handleSearchRequest={handleSearchRequest}
          />
          {width >= 1024 && (
            <>
              <p className={styles.header__inner__up_num}>
                EU +44-203-308-6749
              </p>

              <img
                src="/Account.svg"
                alt="account"
                width="auto"
                height="auto"
              />
            </>
          )}
        </div>
        <div className={styles.header__inner__down}>
          {width >= 1024 ? (
            <>
              <CategoryMenu
                isOpenDD={isOpenCategoryDD}
                handleOpenCategoryDD={handleOpenCategoryDD}
                categories={categories}
                handleSetCatMenuFilters={handleSetCatMenuFilters}
                handleSetTypeMenuFilters={handleSetTypeMenuFilters}
                handleOpenCatalogPage={() => router.push("/catalog")}
              />
              <ul className={styles.header__inner__down__tabs}>
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={styles.header__inner__down__tabs_el}
                    onClick={() => router.push(routes[tab])}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.header__inner__up_num}>EU +44-203-308-6749</p>
          )}
          <div
            className={styles.header__inner__down__bucket}
            onClick={() => router.push("/cart")}
          >
            <div className={styles.header__inner__down__bucket__circle}>
              <img
                className={styles.header__inner__down__bucket__icon}
                src="/bucket.svg"
                alt="bucket"
              />
              <div
                className={styles.header__inner__down__bucket__circle__count}
              >
                <span>{itemsCount}</span>
              </div>
            </div>
            <p className={styles.header__inner__down__bucket__price}>
              {itemsCountPrice} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
