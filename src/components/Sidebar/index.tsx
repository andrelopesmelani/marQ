import { useState, useEffect, SetStateAction } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, [activeLink]);

  return (
    <aside className={`sidebar ${isOpen && "active"}`}>
      <ul>
        <li>
          <Link to="/" className={activeLink == "/" ? "active" : ""}>
            Tarefas
          </Link>
        </li>
      </ul>
    </aside>
  );
};
