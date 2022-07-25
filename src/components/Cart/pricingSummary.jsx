import React from "react";
import {NavLink} from "react-router-dom";
import  paypal from "../../assets/paypalbutton.png";


const PricingSummary = (props) => {
    let couponAmount = 10.00;
    let giftCardAmount = 8.00;
    let estimatedTax = 23.80;
    let estimatedShipping = 0.00;
    let subTotal = props.storeData && props.storeData.length > 0 ? props.storeData.reduce((total, item)=>total+(item.price*item.qty),0): 0;
    return (
          
            <div className="pricing_wrapper">
                <h3>Pricing Summary</h3>
                <p>Subtotal  <span> ${subTotal}</span></p>
                <p>Coupon  <span> ${couponAmount}</span></p>
                <p>Gift Card   <span> ${giftCardAmount} </span></p>
                <p>Estimated Tax   <span> ${estimatedTax}</span></p>
                <p>Estimated Shipping   <span>   ${estimatedShipping === '0.00' ? 'FREE' : estimatedShipping}</span></p>
                <b><p>Estimated Total   <span> ${subTotal - couponAmount - giftCardAmount + estimatedTax + estimatedShipping}</span></p></b>

                <a className="button_wrap">                        
                        <NavLink to="/Checkout"> <button type="submit"  className="primary_button" value="CONTINUE" >CHECKOUT</button></NavLink>
                        {/* <img src={paypal}></img> */}
                </a>
                
           
            </div>
            
       
    );
}

export default PricingSummary;