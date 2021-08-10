import React from "react";
import styles from "./Input.module.scss";
import { useRouter } from "next/router";

interface InputProps {
  title?: string;
  placeholder?: string;
  type?: string;
  isIcon?: boolean;
  style?: {};
  inputStyles?: {};
  value?: string;
  handleChange?: (value: string) => void;
  handleSearchRequest?: () => void;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  isIcon = true,
  style,
  inputStyles,
  value,
  handleChange,
  maxLength,
  type,
  handleSearchRequest,
}) => {
  const router = useRouter();

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
          style={style}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
          maxLength={maxLength}
          type={type || "text"}
        />
        {isIcon && (
          <img
            className={styles.input_inputWrapper_input_icon}
            src="/search_icon.svg"
            alt="search_icon"
            width="auto"
            height="auto"
            onClick={() => {
              if (value.trim().length > 0) {
                handleSearchRequest();
                router.push("/catalog");
              }
            }}
          />
        )}
      </div>
    </div>
  );
};
