import { FC, ReactNode, Suspense } from "react";

import "@/styles/global.css";

import Link from "next/link";

import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout: FC<Props> = ({ children, modal }) => (
  <html lang="en">
    <body>
      <div id="root">
        <header className={styles.wrapper}>
          <Link href={"/offres?key=rental"}>offers</Link>
        </header>
        <Suspense>
          <div>{modal}</div>
        </Suspense>
        <div className={styles.body}>
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
