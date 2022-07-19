
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

 /* <section class="homepage_signature_section">
	<div class="aem-Grid aem-Grid--12">
		<div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--5 banner-image-section">
                        <img src={signature}/>
                </div>
		<div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--7 banner-content-section">
			<div>
				<div class="regular-heading-xl-24-"><b><div>Take off in the new</div><div>Signature Legging</div></b></div><span>Lorem Ipsum Dolor Tempor</span>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
				<div class="button-section">
					<button class="btn btn-secondary">SHOP COLLECTION</button>&nbsp;&nbsp;
					<button class="btn btn-primary">SHOP NOW</button>
				</div>
				<div class="horizontal-bar"></div>
			</div>
		</div>
	</div>
</section> */



               
        )
}

export default Homepage;