import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/instagram.svg";



const Footer = ()=>{
        return (

                <footer >
                 <div className="container footer-one">
                 <div className="aem-Grid aem-Grid--12 ">
                 <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                  <ul>
                        <li><h4>Account</h4></li>
                        <li> Sign In</li>
                        <li>Register</li>
                        <li>Order Status</li>
                        
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" >
                 <ul>
                        <li><h4>About Us</h4></li>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li></li>
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                 <ul>
                        <li><h4>Help</h4></li>
                        <li>Contact Us</li>
                        <li>Order Status</li>
                        <li>Returns</li>
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                 <ul>
                        <li><h4>Follow Us!</h4></li>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.<br></br>
                        <img src={insta} alt="search" className="icon-img"/><img src={facebook} alt="search" className="icon-img" style={{width:'15px'}}/><img src={twitter} alt="search" className="icon-img"/></p></li>
                       
                  </ul>
                </div>
                 </div>
                 </div>
                 <div className="aem-Grid aem-Grid--12 footer-two">
                 <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12"> <h3>V E N I A </h3></div>
                 <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12"> © Company Name Address Ave, City Name, State ZIP</div>
                 <div className="aem-GridColumn aem-GridColumn--default--4  terms-policy aem-GridColumn--phone--12"> <a> Terms of Use </a><a> Privacy Policy</a></div>
                
                </div>
                

                </footer>
        );
}

export default Footer;