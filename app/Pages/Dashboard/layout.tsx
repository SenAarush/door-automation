import React, { ReactNode } from "react";
import Sidebar from "../ui/Dashboard/sidebar/sidebar";
import Navbar from "../ui/Dashboard/navbar/navbar";
import styles from "../ui/Dashboard/dashboard.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
