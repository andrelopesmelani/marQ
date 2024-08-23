import { ReactNode, useState } from "react";
import { Sidebar } from "../Sidebar";
import "./styles.scss";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="layout">
      <Navbar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`content ${isSidebarOpen && "sidebarOpen"}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
