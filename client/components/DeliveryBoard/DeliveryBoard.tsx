import styles from "./DeliveryBoard.module.scss";
import { CONTENT } from "../../public/config.lang";

export const DeliveryBoard = () => {
  return (
    <div className={styles.deliveryBoard}>
      <h2 className={styles.deliveryBoard_title}>Lieferung</h2>
      <div className={styles.deliveryBoard_cnt}>
        {CONTENT.deliveryIcons.map((i) => (
          <div key={i} className={styles.deliveryBoard_imgWrapper}>
            <img src={`/delivery/${i}`} alt={i} />
          </div>
        ))}
      </div>
    </div>
  );
};
