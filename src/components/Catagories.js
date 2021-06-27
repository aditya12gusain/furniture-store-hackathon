import React from "react";
import styles from "./catagories.module.css";

const Catagories = () => {
  return (
    <div className={styles.container}>
      <div id={styles.plate} className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Plate</h3>
          <span>Decoration Plates</span>
        </div>
        <img className={styles.plate} src="./images/plate.png" alt="" />
      </div>
      <div id={styles.africanArt} className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Decoration</h3>
          <span>African Art sculptures</span>
        </div>
        <img
          className={styles.africanArt}
          src="./images/africanArt.png"
          alt=""
        />
      </div>
      <div id={styles.light} className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Lamp</h3>
          <span>Ceiling Lamp</span>
        </div>
        <img className={styles.light} src="./images/light.png" alt="" />
      </div>
      <div id={styles.sofa} className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Sofa</h3>
          <span>Home Stuff</span>
        </div>
        <img className={styles.sofa} src="./images/sofa.png" alt="" />
      </div>
    </div>
  );
};
export default Catagories;
