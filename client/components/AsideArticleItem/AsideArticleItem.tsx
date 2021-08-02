import styles from "./AsideArticleItem.module.scss";

export const AsideArticleItem = ({ title, date, picture }) => {
  return (
    <div className={styles.asideArtItem}>
      <div className={styles.asideArtItem_inner}>
        <img
          className={styles.asideArtItem_img}
          src={`http://localhost:5000/${picture}`}
          alt="articleImage"
        />
        <div className={styles.asideArtItem_cnt}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
