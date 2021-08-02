import styles from "./AsideArticle.module.scss";
import { AsideArticleItem } from "../../components/AsideArticleItem/AsideArticleItem";

export const AsideArticle = ({ title, articles }) => {
  return (
    <div className={styles.article}>
      <h2 className={styles.article_title}>{title}</h2>
      <div className={styles.article_cnt}>
        {articles.map((item, idx) => (
          <AsideArticleItem key={`${idx.toString()}_${item.title}`} {...item} />
        ))}
      </div>
    </div>
  );
};
