import React from "react";

import styles from "./herosection.module.css";

const Herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}>
        <h1 className={styles.heading}>All For Your Home</h1>
        <h5 className={styles.tag}>
          Find best quality furniture for all of your requirements{" "}
        </h5>
        <button className={styles.tag}>See More</button>
      </div>
      <img
        className={styles.chairImage}
        src="./images/heroBackground.png"
        alt=""
      />
    </div>
  );
};

export default Herosection;
