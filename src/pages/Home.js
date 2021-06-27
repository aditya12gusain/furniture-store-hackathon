import React from "react";
import styles from "./home.module.css";

import Herosection from "../components/Herosection";
import ShopYourChoice from "../components/ShopYourChoice";
import ProductsOfTheWeek from "../components/ProductsOfTheWeek";
import Catagories from "../components/Catagories";
import UpcomingCollections from "../components/UpcomingCollections";
import BlueBanner from "../components/BlueBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Herosection />
      <ShopYourChoice />
      <ProductsOfTheWeek />
      <Catagories />
      <UpcomingCollections />
      <BlueBanner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
