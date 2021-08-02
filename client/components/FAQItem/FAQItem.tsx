import styles from "./FAQItem.module.scss";
export const FAQItem = ({ title, cnt, isOpen }) => {
  return (
    <div>
      <div className={styles.faq_inner}>
        <h4 className={styles.faq_title}>{title}</h4>
        {isOpen && <p className={styles.faq_cnt}>{cnt}</p>}
      </div>
    </div>
  );
};
