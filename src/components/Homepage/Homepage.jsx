
import React from "react";
import signature from "../../assets/signature-legg.jpg";
import '../Homepage/homepage.scss';
import Carousel from './Bannerslider';
import Content from './Contentpage';
// import Filter from '../../components/filter';




const Homepage = () => {
        return (
              <div>
                {/* <Filter></Filter> */}
                <Carousel></Carousel>
		<Content></Content>
            </div>   
               
        )
}

export default Homepage;