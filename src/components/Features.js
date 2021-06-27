import React from "react";
import styles from "./features.module.css";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresLineOne}>
        <img className={styles.icon} src="./images/shop.svg" alt="" />
        <h3>Shop Online</h3>
        <p>Shop what you love anytime,anywhere at your fingertips </p>
      </div>
      <div className={styles.featuresLineTwo}>
        <img className={styles.icon} src="./images/clock.svg" alt="" />
        <h3>Return policy</h3>
        <p>Products are returnable within the applicable return window </p>
      </div>
      <div className={styles.featuresLineThree}>
        <img className={styles.icon} src="./images/dollar.svg" alt="" />
        <h3>Free shipping</h3>
        <p>As a user of AntiQ enjoy FREE & Fast delivery across INDIA</p>
      </div>
      <div className={styles.featuresLineFour}>
        <img className={styles.icon} src="./images/wallet.svg" alt="" />
        <h3>Payment methods</h3>
        <p>Shop what you love anytime,anywhere at your fingers tips </p>
      </div>
    </div>
  );
};

export default Features;
