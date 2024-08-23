import "./styles.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  isOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isOpen, setIsSidebarOpen }: NavbarProps) => {
  return (
    <nav>
      {isOpen ? (
        <IoClose onClick={() => setIsSidebarOpen(false)} />
      ) : (
        <GiHamburgerMenu onClick={() => setIsSidebarOpen(true)} />
      )}
    </nav>
  );
};

export default Navbar;
