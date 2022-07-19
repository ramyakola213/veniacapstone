import React, { Component } from "react";
import { connect } from "react-redux";
import GuestContactInformation from './contactInformation';
import ShoppingMethods from './shippingMethodInfo';
import {NavLink} from "react-router-dom";
import PaymentInfo from './paymentInformation';
import PricingSummary from './pricingSummary'
class CheckoutDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (

            <section className="container checkout_wrapper">
                <div className="aem-Grid   aem-GridColumn--phone--12 ">

                    <h1 className="checkout_wrapper__h1-heading display-m-30-">Checkout <hr></hr></h1>


                </div>
                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <h2 className=" checkout_wrapper__h2-heading display-m-24-">  Guest Checkout</h2>

                        <GuestContactInformation />
                        <ShoppingMethods />
                        <PaymentInfo />


                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 checkout_wrapper__pricing_wrapper ml-10">
                        <PricingSummary />
                    </div>


                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  button_wrap">
                   <NavLink to="/Order"> <button type="submit"  className="primary_button" value="CONTINUE" >PLACE ORDER</button></NavLink>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    // contactInformation: state.handleCart
})
const mapDispatchToProps = {
    // saveContactInfo,
    // saveShippingInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);