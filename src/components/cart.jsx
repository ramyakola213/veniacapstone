
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import trash from "../assets/trash-2.svg";
import edit from "../assets/edit-2.svg";
import heart from "../assets/heart.svg";
import paypal from "../assets/paypal.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import PricingSummary  from './Cart/pricingSummary'


const Cart = (props) => {
    const storeData = useSelector(state => state);
    
    const ItemsDetails = () => {
        return (
            <>

             <div className="aem-Grid aem-Grid--12"><h1>Your shopping Bag</h1><hr></hr></div>

                {storeData && storeData.handleCart && storeData.handleCart.length > 0 ? storeData.handleCart.map((product) => {
                    return (
                        <>
                            <div className="product-card aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12" >
                                <div className="product-card card-mobile aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" >
                                    <div className="card-img">
                                        <img src={product.image} className="card-img-top" alt={product.title} width="100%" />
                                    </div>
                                    <div>

                                        {/* <button type="button" >+</button> */}
                                        <h5 className="">{product.title.substring(0, 25)}</h5>
                                        <p>Size: Medium</p>
                                        <p>Color : Storm</p>

                                        <h6 className=" "> ${product.price}</h6>
                                    </div>
                                    {/* <p>{product.qty}</p> */}
                                </div>
                                <div className=" aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 grid-div" >
                                    <ul data-accordion className=" size">
                                        <li ><button className="plus"  >-</button>   </li>
                                        <li ><button className="quant">1</button>     </li>
                                        <li ><button className="plus">+</button>    </li>
                                    </ul>
                                </div>
                                <div className=" aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 gri-div" >
                                    <ul data-accordion className="categories">
                                        <li > <img src={edit} alt="search" className="icon-img" />Edit Item   </li>
                                        <li > <img src={trash} alt="search" className="icon-img" />Remove    </li>
                                        <li > <img src={heart} alt="search" className="icon-img" />Save for later    </li>
                                    </ul>


                                </div>
                            </div>
                        </>
                    )
                }) : 'No Items in Cart to Display'
                }

                {storeData && storeData.handleCart && storeData.handleCart.length > 0 ? 
                <PricingSummary storeData={storeData.handleCart}></PricingSummary>
 
                         : ''

                }
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12  button_wrap">                        
                        <NavLink to="/Checkout"> <button type="submit"  className="primary_button" value="CONTINUE" >CHECKOUT</button></NavLink>
                      {/* <img src={paypal}></img> */}
                    </div>

            </>
        )
    }

    return (
        <div className="container">
            <div className="aem-Grid cart">
                {/* <Breadcrum></Breadcrum> */}
                <div className="aem-Grid aem-Grid--12  ">

                    {<ItemsDetails />}

                </div>

            </div>
        </div>
    )
}

export default Cart;