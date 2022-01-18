import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import styles from "./styles.module.scss";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div id={styles.logo}>mfilype.dev</div>
      <li id={styles.responsive} onClick={() => setMenuOpen(prev => !prev)}>
        {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </li>

      <div className={styles.menuContent} id={`${menuOpen && styles.open}`}>
        <li>Início</li>
        <li>
          <div className="icon linkedin" />
        </li>
        <li>
          <div className="icon instagram" />
        </li>
      </div>
    </header>
  );
}
