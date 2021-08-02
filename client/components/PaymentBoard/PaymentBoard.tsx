import styles from "./PaymentBoard.module.scss";
import { CONTENT } from "../../public/config.lang";

export const PaymentBoard = () => {
  return (
    <div className={styles.paymentBoard}>
      <h2 className={styles.paymentBoard_title}>Zahlungsarten</h2>
      <div className={styles.paymentBoard_cnt}>
        {CONTENT.paymentIcons.map((i) => (
          <div key={i} className={styles.paymentBoard_imgWrapper}>
            <img src={`/payment/${i}`} alt={i} />
          </div>
        ))}
      </div>
    </div>
  );
};
