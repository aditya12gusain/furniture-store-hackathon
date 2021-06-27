import React from "react";
import styles from "./productsOfTheWeek.module.css";

const ProductsOfTheWeek = () => {
  return (
    <div className={styles.powContainer}>
      <div className={styles.powContent}>
        <h1 className={styles.powTitle}>Products of the week</h1>
        <p className={styles.powTagLine}>
          The wood that enhances the beauty of you home For the urban look
        </p>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.productContainer}>
          <img
            className={styles.productImages}
            src="./images/pow1.jpg"
            alt=""
          />
          <div className={styles.productImagesDesc}>
            <h2>Wooden Radio</h2>
            <p>$22</p>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            className={styles.productImages}
            src="./images/pow2.jpg"
            alt=""
          />
          <div className={styles.productImagesDesc}>
            <h2>Wooden Chair</h2>
            <p>$24</p>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            className={styles.productImages}
            src="./images/pow3.jpg"
            alt=""
          />
          <div className={styles.productImagesDesc}>
            <h2>Flash</h2>
            <p>$23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOfTheWeek;
