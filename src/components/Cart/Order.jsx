import React from "react";
import order from "../../assets/order.PNG";
import GuestContactInformation from './contactInformation';

import {useSelector} from 'react-redux'

const Order = () => {
        const conInfo = useSelector(state => state.contactInfo.contactDetails);
        console.log('contact information', conInfo)
        const cartDetails = useSelector(state => state.handleCart);
        console.log('cart Details', cartDetails)
        const shippingInfo = useSelector(state => state.shipping);
        console.log('shipping Info', shippingInfo)
        const paymentInfo = useSelector(state => state.payment);
        console.log('payment Info', paymentInfo)

        return (
                <section className="container ">
                        <div className="checkout_wrapper">
                           <div className="aem-Grid   aem-GridColumn--phone--12  ">
                                <h1 className="checkout_wrapper__h1-heading display-m-30-">Order Successful <hr></hr></h1>
                            </div>
                             <div className="aem-Grid aem-Grid--12 order-info">
                                   <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 order-info">
                                        <h4>  Order Number 1700001</h4>
                                        <div className="aem-Grid aem-Grid--12 ">
                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                        <h5>Shipping Information</h5>
                                                        <p>{conInfo.email} ,<br />
                                                                {conInfo.phoneNumber}</p>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                        <h5>Shipping Method</h5>
                                                        <p>{shippingInfo.shippingMethodDetails.shippingval}</p>
                                                        <p> Est. delivery in 4 - 8 business days</p>
                                                        <p>{shippingInfo.shippingMethodDetails.shippingval}</p>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                        <p>{conInfo.firstName + " " + conInfo.lastName}</p>
                                                        <p> {conInfo.add1 + "," + conInfo.add2} </p>
                                                        <p> {conInfo.city + "," + conInfo.state + "," + conInfo.zipCode} </p>
                                                        <p>{conInfo.country}</p>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 mt-10">
                                                        <h5>Payment Method</h5>
                                                        <p>Credit Card </p>
                                                        <p> Visa ending in {paymentInfo.paymentDetails.creditCardnumber.slice(-4)}</p>
                                                </div>      
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 mt-10">
                                            <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                                           <p className="mt-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                                        </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 sidebar">
                                        <img src={order} alt="image" width="300" height="200" />
                                </div>
                          </div>
                        </div>
                </section>     
        )
}

export default Order;