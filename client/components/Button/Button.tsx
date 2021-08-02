import styles from "./Button.module.scss";
import React from "react";

interface IButtonProps {
  text: string;
  style?: {};
}

export const Button: React.FC<IButtonProps> = ({ text, style }) => {
  return (
    <div>
      <button style={style} className={styles.btn}>
        {text}
      </button>
    </div>
  );
};
