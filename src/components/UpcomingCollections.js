import React from "react";
import styles from "./upcomingCollections.module.css";

const UpcomingCollections = () => {
  return (
    <div
      className={styles.powContainer}
      style={{ backgroundImage: `url("./images/upcomingEventBg.jpg")` }}
    >
      <div className={styles.upcomingProductsContent}>
        <h1 className={styles.upcomingProductsTitle}>Upcoming Collections</h1>
        <p className={styles.upcomingProductsTagline}>
          The wood that enchances the beauty of your home
        </p>
        <button className={styles.upcomingProductsBtn}>View More</button>
      </div>
    </div>
  );
};

export default UpcomingCollections;
