import React from "react";
import {NavLink} from "react-router-dom";
import  paypal from "../../assets/paypalbutton.png";


const PricingSummary = (props) => {
    let couponAmount = 10.00;
    let giftCardAmount = 8.00;
    let estimatedTax = 23.80;
    let estimatedShipping = 0.00;
    let subTotal = props.storeData && props.storeData.length > 0 ? props.storeData.reduce((total, item)=>total+(item.price*item.qty),0): 0;
    let estimatedTotal = (subTotal - couponAmount - giftCardAmount + estimatedTax + estimatedShipping).toFixed(2);
    return (
          
            <div className="pricing_wrapper">
                <h3>Pricing Summary</h3>
                <p>Subtotal  <span> ${subTotal}</span></p>
                <p>Coupon  <span> ${couponAmount}</span></p>
                <p>Gift Card   <span> ${giftCardAmount} </span></p>
                <p>Estimated Tax   <span> ${estimatedTax}</span></p>
                <p>Estimated Shipping   <span>   ${estimatedShipping === '0.00' ? 'FREE' : estimatedShipping}</span></p>
                <b><p>Estimated Total   <span>${estimatedTotal} </span></p></b>


                {/* {this.props.contactInformation && this.props.contactInformation.submitted === true 
                    && this.props.shippinginfo && this.props.shippinginfo.shippingMethodSubmitted === true 
                    && this.props.paymentInfo && this.props.paymentInfo.submittedCardDetails === true &&<div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  button_wrap">
                   <NavLink to="/Order"> <button type="submit"  className="primary_button" value="CONTINUE" >PLACE ORDER</button></NavLink>
                </div>} */}

                
           
            </div>
            
       
    );
}

export default PricingSummary;