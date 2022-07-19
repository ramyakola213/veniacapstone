
import React from "react";
import signature from "../../assets/signature-legg.jpg";
import '../Homepage/homepage.scss';
import Carousel from './Bannerslider';
import Content from './Contentpage';




const Homepage = () => {
        return (
              <div>
                <Carousel></Carousel>
		<Content></Content>
            </div>   
               
        )
}

export default Homepage;