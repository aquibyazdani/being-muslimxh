import React from "react";
import "./HomePage.css";
import Layout from "../../components/Layout/Layout";
import ImageSlider from "../../components/sliders/ImageSlider";
import pexel1 from "../../assests/images/1.webp";
import pexel2 from "../../assests/images/2.jpeg";
import pexel3 from "../../assests/images/3.webp";
import pexel4 from "../../assests/images/4.webp";
import pexel5 from "../../assests/images/5.webp";

const HomePage = () => {
  const images = [pexel1, pexel2, pexel3, pexel4, pexel5];
  return (
    <Layout>
      <ImageSlider images={images} duration={5000} />
    </Layout>
  );
};

export default HomePage;
