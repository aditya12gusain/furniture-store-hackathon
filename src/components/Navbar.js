import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.logo} src="./images/logo.png" alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.button}>Home</div>
        <div className={styles.button}>Products</div>
        <div className={styles.button}>Shop</div>
        <div className={styles.button}>Blog</div>
        <div className={styles.button}>New at AntiQ</div>
        <div className={styles.button}>Contact</div>
        <div className={styles.searchContainer}>
          <span>
            <img src="./images/search.png" alt="" />
          </span>
          <input
            placeholder="Looking For Something"
            type="text"
            className={styles.search}
          />
        </div>

        <div
          onClick={() => setToggleNavbar(!toggleNavbar)}
          className={styles.hamburger}
        >
          {toggleNavbar ? `X` : "||||"}
        </div>
      </div>
      <div
        className={
          toggleNavbar
            ? `${styles.collapsedDisplay} ${styles.open}`
            : `${styles.collapsedDisplay} ${styles.close}`
        }
      >
        <div className={styles.button}>Home</div>
        <div className={styles.button}>Products</div>
        <div className={styles.button}>Shop</div>
        <div className={styles.button}>Blog</div>
        <div className={styles.button}>New at AntiQ</div>
        <div className={styles.button}>Contact</div>
        <input placeholder="Search..." type="text" className={styles.search} />
      </div>
    </div>
  );
};

export default Navbar;
