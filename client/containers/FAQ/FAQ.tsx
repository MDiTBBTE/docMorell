import styles from "./FAQ.module.scss";
import { FAQItem } from "../../components/FAQItem/FAQItem";

export const FAQ = ({ faq }) => {
  return (
    <div className={styles.faq}>
      <div className={styles.faq_inner}>
        <h2 className={styles.faq_title}>
          DocMorell Online-Apotheke - kümmert sich um Ihre Gesundheit!
        </h2>
        {faq.map((i) => (
          <FAQItem key={i.title} {...i} />
        ))}
      </div>
    </div>
  );
};
