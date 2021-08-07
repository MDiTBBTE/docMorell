import styles from "./Breadcrumbs.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRouter } from "next/router";

export const Breadcrumbs = () => {
  const router = useRouter();

  const { breadcrumbs } = useTypedSelector((state) => state.breadcrumb);

  return (
    <div className={styles.bc}>
      <div className={styles.bc_inner}>
        {breadcrumbs.map((e, idx) => (
          <div
            className={styles.bc_route}
            onClick={
              breadcrumbs.length - 1 !== idx
                ? () => router.push(e.route)
                : () => null
            }
          >
            {e.text}
            {breadcrumbs[idx + 1] && (
              <img
                className={styles.bc_route_img}
                src="/breadcrumb_arrow.svg"
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
