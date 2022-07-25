import React from "react";
import cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Header = () => {
   const stateData = useSelector(state => state.handleCart)

   return (


      <header class="venia--header">
         <div className="aem-Grid"> 
            <i className="fas fa-bars dropdown">
               <h1 className=""> <NavLink to="veniacapstone">V E N I A </NavLink></h1>
                <ul>
                <li> <NavLink to="/cart"  storeData={stateData ? stateData.length > 0 ? stateData : [] : []} ><img src={cart} alt="user" className="icon-img" /> <h5 class="cart_items_number">{stateData ? stateData.length > 0 ? stateData.length : '0' : ''} </h5></NavLink></li>
                </ul>
            </i> 
         </div>

         <nav>
         <NavLink to="/veniacapstone"> <h4 className="logo">V E N I A</h4></NavLink>
            <ul>
               <li><NavLink to="/products" > Products </NavLink></li>
               <li><NavLink to="/products" > Women </NavLink></li>
               <li> <NavLink to="/products" >Men </NavLink></li>
               <li> <NavLink to="/products" >Electronics </NavLink></li>
               <li><NavLink to="/products" > Jewellary</NavLink></li>

            </ul>
            <ul>
               <li> <NavLink to="/cart"  storeData={stateData ? stateData.length > 0 ? stateData : [] : []} ><img src={cart} alt="user" className="icon-img" /> <h5 class="cart_items_number">{stateData ? stateData.length > 0 ? stateData.length : '0' : ''} </h5></NavLink></li>
            </ul>
         </nav>

      </header>


   )
}

export default Header;