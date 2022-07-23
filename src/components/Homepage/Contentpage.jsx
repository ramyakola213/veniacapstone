import React from "react";
import {NavLink} from "react-router-dom";
import four from "../../assets/signature-legg.jpg";
import bgcart from "../../assets/bgcart.jpg";
import bgshop from "../../assets/homepageshop.jpg";
const Content = () =>{

        return(
        <section class="homepage_content_wrapper">
	     <div className="aem-Grid aem-Grid--12 content_banner_one">
	     <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 banner_one_right mobile-view"> <img src={bgcart} alt="bannerone_image"></img>  </div>
		 <div className="aem-GridColumn aem-GridColumn--default--6 ">
		   <article>	
		      <div class="banner_one_left">		
			<h1 className="display-m-30-">Take off in the new Signature Legging</h1>
                        <h3 className="mt-10">Our products represent your moments in time</h3>
			<p>Our products represent your moments in time, your special places, time spent with loved ones, your once in a life times.</p>
			<div className="aem-GridColumn aem-GridColumn--default--12  button_wrap">
				<NavLink to="/Products" className="mr-20">
					<button type="submit" className="secondary_button " value="CONTINUE">SHOP COLLECTION</button>
				</NavLink>
                                <NavLink to="/Products">
					<button type="submit" className="primary_button" value="CONTINUE">SHOP NOW</button>
				</NavLink>
                                <hr className=""></hr>
			</div>
		      </div>	
		  </article>
		  </div>
		   <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 banner_one_right desktop-view"> <img src={bgcart} alt="bannerone_image"></img>  </div>
               </div>
	      <div className="aem-Grid aem-Grid--12 content_banner_two">
                 <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 banner_two_left">
                         <img src={bgshop} alt="bannertwo_image"></img>
		 </div>
		 <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 banner_two_right">
			<h1 className="display-m-30-">Conquer your next adventure</h1>
			<p>Our products represent your moments in time</p>
			<div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  button_wrap">
				<NavLink to="/Products">
					<button type="submit" className="secondary_button content-btn" value="CONTINUE">SHOP NOW</button>
				</NavLink>
			</div>
		 </div>
               </div>
        </section>
        )
}

export default Content;