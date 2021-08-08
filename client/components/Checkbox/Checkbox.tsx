import React from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ isChecked }) {
  return (
    <input
      className={styles.input}
      type="checkbox"
      checked={isChecked}
      onChange={() => {}}
    />
  );
}
