import { FC, ReactNode } from "react";
import "../styles/styles.scss";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
