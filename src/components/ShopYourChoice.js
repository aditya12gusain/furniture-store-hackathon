import React from "react";
import styles from "./shopYourChoice.module.css";

const ShopYourChoice = () => {
  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundImage: `url("./images/triangle.png")` }}
    >
      <div className={styles.title}>
        <h1>Shop Your Choice</h1>
        <p>Designed for you</p>
      </div>
      <div className={styles.sofa}>
        <div className={styles.sofaTagLine}>
          <p>Change the look of your house,change the perspective of others</p>
        </div>
        <div className={styles.sofaBtnAndImg}>
          <img className={styles.sofaimg} src="./images/Sofa2.png" alt="" />
          <h3>Sofas</h3>
          <button>View More</button>
        </div>
      </div>
      <div className={styles.chairsAndTables}>
        <div className={styles.chair}>
          <div className={styles.chairTagLine}>
            <p className={styles.sofaLine}>
              Comfortable and stylish chairs in affordable range
            </p>
          </div>
          <img className={styles.chairImg} src="/images/Chair.png" alt="" />
          <h3>Chairs</h3>
          <button>View More</button>
          <div className={styles.chairTitle_Btn}></div>
        </div>
        <div className={styles.chair}>
          <div className={styles.chairTagLine}>
            <p className={styles.sofaLine}>
              Traditional but still best at their astethetic
            </p>
          </div>
          <img
            className={styles.tableImage}
            src="/images/groupTable.png"
            alt=""
          />
          <h3>Tables</h3>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default ShopYourChoice;
