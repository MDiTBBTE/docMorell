// Core
import React from "react";
// Comp
import { Input } from "../Input/Input";
// Styles
import styles from "./Header.module.scss";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";

interface IHeaderProps {
  tabs: string[];
  itemsCount?: number;
  itemsCountPrice?: number;
  categories: {}[];
  isOpenCategoryDD: boolean;
  handleOpenCategoryDD: () => void;
  handleSetCatMenuFilters: (category: string) => void;
  handleSetTypeMenuFilters: (type: string) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  tabs,
  itemsCount = 2,
  itemsCountPrice = 93.56,
  categories,
  isOpenCategoryDD,
  handleOpenCategoryDD,
  handleSetCatMenuFilters,
  handleSetTypeMenuFilters,
}) => {
  return (
    <div>
      <div className={`container ${styles.header__inner}`}>
        <div className={styles.header__inner__up}>
          <img
            src="/LOGO.svg"
            alt="Logo DocMorell"
            width="auto"
            height="auto"
          />
          <Input placeholder={"Suche mit Name"} />
          <p>EU +44-203-308-6749</p>
          <img src="/Account.svg" alt="account" width="auto" height="auto" />
        </div>
        <div className={styles.header__inner__down}>
          <CategoryMenu
            isOpenDD={isOpenCategoryDD}
            handleOpenCategoryDD={handleOpenCategoryDD}
            categories={categories}
            handleSetCatMenuFilters={handleSetCatMenuFilters}
            handleSetTypeMenuFilters={handleSetTypeMenuFilters}
          />
          <ul className={styles.header__inner__down__tabs}>
            {tabs.map((tab) => (
              <li key={tab} className={styles.header__inner__down__tabs_el}>
                {tab}
              </li>
            ))}
          </ul>
          <div className={styles.header__inner__down__bucket}>
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
