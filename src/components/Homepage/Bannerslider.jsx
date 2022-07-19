import React, { useState } from "react";
import '../../components/Homepage/Bannerslider.scss';
import {NavLink} from "react-router-dom";
// import { images } from "../Helpers/CarouselData";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import rightarrow from "../../assets/chevron-right.svg";
import one from "../../assets/sliderbgone.jpg";
import four from "../../assets/bgfour.jpg";
import two from "../../assets/sliderbgtwo.jpg";
import banner from "../../assets/signature-legg.jpg";
import Displayproducts from './Displaycatelog';

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

 const images = [
 
    {  
      title: "Signature Collections",
      subtitle: "The Best collection in the World are nearer to you",
      img: two },
    {
      title: "Conquer your next adventure",
      subtitle: "Options are here to shop more adventures collect",
      img: one,
    },
    {
      title: "Take off in the new Signature Legging",
      subtitle: "go for signature legging make royal suit for you",
      img: four,
    },
  ];


  return (

           <>
            <section className="carousel">
              <div className="aem-Grid aem-Grid--12 carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className="left aem-GridColumn aem-GridColumn--default--1 " onClick={()=> { currImg > 0 && setCurrImg(currImg - 1); }} > <img src={rightarrow} alt="chevron-right" className="chevron-right" /> </div>
                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--10 homepage_slider_content">
                  <h1 className="display-m-30-">Shop the new {images[currImg].title}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,{images[currImg].subtitle} Lobortis mattis aliquam faucibus purus.</p>
                  <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  button_wrap">
                    <NavLink to="/Products">
                      <button type="submit" className="primary_button" value="CONTINUE">SHOP NOW</button>
                    </NavLink>
                  </div>
                </div>
                <div className="right aem-GridColumn aem-GridColumn--default--1 " onClick={()=> {currImg
                  < images.length - 1 && setCurrImg(currImg + 1);}}> <img src={rightarrow} alt="chevron-right" /> </div>
              </div>
            </section>
                <Displayproducts></Displayproducts>
           </>
                
  );
}

export default Carousel;
