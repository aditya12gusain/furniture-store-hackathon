import React from "react";
import styles from "./blueBanner.module.css";

const BlueBanner = () => {
  return (
    <div className={styles.bluebanner}>
      <h1 className={styles.title}>
        Express Delivery in just <span className={styles.time}>24 hrs</span>
      </h1>
      <button className={styles.blueBannerBtn}>Order Now</button>
    </div>
  );
};
export default BlueBanner;
