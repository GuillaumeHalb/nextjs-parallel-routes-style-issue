import { FC } from "react";

import styles from "./page.module.css";

type Props = {
  searchParams?: {
    key: string;
  };
};

const OffersPage: FC<Props> = ({ searchParams }) => {
  console.info(searchParams?.key);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Expected red text</div>
    </div>
  );
};

export default OffersPage;
