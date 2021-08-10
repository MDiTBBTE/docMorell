import styles from "./Button.module.scss";
import React from "react";

interface IButtonProps {
  text: string;
  style?: {};
  handleClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  style,
  handleClick,
}) => {
  return (
    <div>
      <button style={style} className={styles.btn} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};
