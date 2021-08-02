import React from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

interface InputProps {
  title?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ title, placeholder }) => {
  return (
    <div>
      {title && <p>{title}</p>}
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputWrapper__input}
          placeholder={placeholder}
          type="text"
        />
        <img
          className={styles.inputWrapper__input_icon}
          src="/search_icon.svg"
          alt="search_icon"
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
};
