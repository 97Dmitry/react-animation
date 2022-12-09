import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";

const MainLayout = () => {
  return (
    <main className={styles.root}>
      <Outlet />
    </main>
  );
};

export default MainLayout;
