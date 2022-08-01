
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import trash from "../../assets/trash-2.svg";
import edit from "../../assets/edit-2.svg";
import heart from "../../assets/heart.svg";
import paypal from "../../assets/paypal.png";
import { NavLink } from "react-router-dom";
import "../Cart/scss/checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import PricingSummary  from '../Cart/pricingSummary';
import Accord from './accord';




const Cart = (props) => {
    const storeData = useSelector(state => state);

    

    const Quantity = (props) => {

        let inputval = React.createRef();
    
        let [num, setQuantity] = useState(props.total);
    
        let increaseQuantity = () => {
            if (num < 10) {
            setQuantity(Number(num) + 1);
            }
        };
    
        let decreaseQuantity = () => {
            if (num > 0) {
            setQuantity(num - 1);
            }
        }
    
        let handleChange = (e) => {
            setQuantity(e.target.value);
        }
    
        return ( 
            <ul data-accordion className="categories size" >
            <li ><button className="plus" onClick={decreaseQuantity} >-</button>   </li>
            <li ><input type="text" className="quant" ref={inputval}  value={num} onChange={handleChange}/>   </li>
            <li ><button className="plus" onClick={increaseQuantity}>+</button>    </li>
            
     </ul>
        );
    }
    const ItemsDetails = () => {
        return (
            <>

             <div className="aem-Grid aem-Grid--12"><h1>Your shopping Bag</h1><hr></hr></div>
             <div className="aem-Grid aem-Grid--12">
             <div className=" aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12" >
                {storeData && storeData.handleCart && storeData.handleCart.length > 0 ? storeData.handleCart.map((product) => {
                    return (
                        <>
                            <div className="product-card aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12" >
                                <div className="product-card card-mobile aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12" >
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
                                <div className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 grid-div" >
                                   <Quantity total={product.qty}/>
                                </div>
                                <div className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 gri-div" >
                                    <ul data-accordion className="categories categories__edit-block">
                                        <li >  <NavLink to={`/products/${product.id}`}> <img src={edit} alt="search" className="icon-img" />Edit Item  </NavLink> </li>
                                        <li > <img src={trash} alt="search" className="icon-img" />Remove    </li>
                                        <li > <img src={heart} alt="search" className="icon-img" />Save for later    </li>
                                    </ul>


                                </div>
                            </div>
                        </>
                    )
                }) : 'No Items in Cart to Display'
                }
                </div>

              <div className="displaycart-wrap__pricing-block aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12" >
             
                {storeData && storeData.handleCart && storeData.handleCart.length > 0 ? 
                <PricingSummary storeData={storeData.handleCart}></PricingSummary>
 
                         : ''

                }
                { storeData && storeData.handleCart && storeData.handleCart.length > 0 ? 
                <div className="button_wrap">                        
                        <NavLink to="/Checkout"> <button type="submit"  className="primary_button" value="CONTINUE" >CHECKOUT</button>
                        <img src={paypal} alt="paypal_button"  width="180" /> </NavLink>  
                </div>
                  : ""
                }
                </div>
                </div>  
                


                <div className="aem-Grid aem-Grid--12">
                <div className=" aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12" >

                        <div className="displaycart-wrap">
                            <div className="displaycart-wrap__row">
                                <Accord heading="Estimation your shipping">
                                    Estimation shipping details...
                                </Accord> 
                            </div>
                            <div className="displaycart-wrap__row">
                            <Accord heading="Enter a coupon code">
                                   Coupon code details...
                            </Accord> 
                            </div>
                            <div className="displaycart-wrap__row">
                            <Accord heading="Apply gift card">
                                   Gift card details:..
                            </Accord>
                            </div>
                        </div>
                   
                  </div>
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