import styles from "./Board.module.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { CONTENT } from "../../public/config.lang";
import { useEffect, useState } from "react";
import { BoardTab } from "../../components/BoardTab/BoardTab";

export const Board = ({ width }) => {
  const [carousel, setCarousel] = useState(CONTENT.carousel);
  const [ind, setInd] = useState(0);
  const [selItem, setSelItem] = useState(CONTENT.carousel[ind || 0]);
  const [dots, setDots] = useState(carousel);

  const handleNextClick = () => {
    setInd(ind === carousel[carousel.length - 1].id ? 0 : ind + 1);
  };

  const handleChooseClick = (ind) => setInd(ind);

  useEffect(() => {
    return () => {
      setSelItem(carousel[ind]);
      setDots(
        carousel.map((i) => {
          return {
            ...i,
            isSelected: i.id === ind,
          };
        })
      );
    };
  }, [ind, carousel, dots]);

  return (
    <div className={styles.board}>
      <div className={`container ${styles.board_inner}`}>
        <div className={styles.board_carousel}>
          <Carousel
            selItem={selItem}
            dots={dots}
            handleNextClick={handleNextClick}
            handleChooseClick={handleChooseClick}
            width={width}
          />
        </div>
        <div className={styles.board_tabs}>
          {CONTENT.board.map((i) => (
            <BoardTab key={i.title} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};
