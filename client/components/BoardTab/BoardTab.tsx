import styles from "./BoardTab.module.scss";

export const BoardTab = ({ img, title, text }) => {
  return (
    <div className={styles.boardTab}>
      <div className={styles.boardTab_inner}>
        <div className={styles.boardTab_imgWrapper}>
          <img src={`/board/${img}`} alt="" />
        </div>
        <div>
          <p className={styles.boardTab_title}>{title}</p>
          <p className={styles.boardTab_text}>{text}</p>
        </div>
      </div>
    </div>
  );
};
