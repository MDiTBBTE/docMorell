import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  title?: string;
  placeholder?: string;
  isIcon?: boolean;
  style?: {};
  inputStyles?: {};
}

export const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  isIcon = true,
  style,
  inputStyles,
}) => {
  return (
    <div className={styles.input} style={inputStyles}>
      {title && <p className={styles.input_text}>{title}</p>}
      <div
        className={styles.input_inputWrapper}
        style={{ background: isIcon ? "#F1F5F9" : "transparent" }}
      >
        <input
          className={
            isIcon
              ? styles.input_inputWrapper_input
              : styles.input_inputWrapper_inputWithout
          }
          placeholder={placeholder}
          type="text"
          style={style}
        />
        {isIcon && (
          <img
            className={styles.input_inputWrapper_input_icon}
            src="/search_icon.svg"
            alt="search_icon"
            width="auto"
            height="auto"
          />
        )}
      </div>
    </div>
  );
};
