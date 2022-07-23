import React from "react";
import cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Header = () => {
   const stateData = useSelector(state => state.handleCart)
   console.log('state Data', stateData)

   return (


      <header>
            <div className="aem-Grid"> <i className="fas fa-bars dropdown">
               <h1 className="/veniacapstone"> <NavLink to="/">V E N I A </NavLink></h1>
               <ul >
                  <li> <NavLink to="/cart" ><img src={cart} alt="user" className="icon-img" /></NavLink></li>
               </ul>
               <div className="dropdown-content">
                  <div className="aem-GridColumn aem-GridColumn--default--3">
                     <div className="sidebar">
                        <h3 className="regular-body-s-14-">Filters</h3>
                        <hr></hr>
                        <p className="regular-body-s-14-">  Attribute     </p>
                        <ul data-accordion className="categories">
                           <li ><input type="checkbox" id="all" />   All </li>
                           <li ><input type="checkbox" id="high" /> Women's Collection </li>
                           <li ><input type="checkbox" id="low" /> Men's collection </li>
                           <li ><input type="checkbox" id="boots" /> Jewelery</li>
                           <li ><input type="checkbox" id="all" /> Electronics</li>
                        </ul>
                        <hr></hr>
                        <p className="regular-body-s-14-"> Attribute</p>

                        <ul data-accordion className="categories">
                           <li ><input type="checkbox" id="all" />   All </li>
                           <li ><input type="checkbox" id="high" /> Women's Collection </li>
                           <li ><input type="checkbox" id="low" /> Men's collection </li>
                           <li ><input type="checkbox" id="boots" /> Jewelery</li>
                           <li ><input type="checkbox" id="all" /> Electronics</li>
                        </ul>
                        <hr></hr>
                        <p>Attribute</p>
                        <ul data-accordion className="categories">
                           <li ><input type="checkbox" id="all" />   All </li>
                           <li ><input type="checkbox" id="high" /> Women's Collection </li>
                           <li ><input type="checkbox" id="low" /> Men's collection </li>
                           <li ><input type="checkbox" id="boots" /> Jewelery</li>
                           <li ><input type="checkbox" id="all" /> Electronics</li>
                           <li ><input type="checkbox" id="low" /> Men's collection </li>
                           <li ><input type="checkbox" id="boots" /> Jewelery</li>
                           <li ><input type="checkbox" id="all" /> Electronics</li>
                           <li ><input type="checkbox" id="low" /> Men's collection </li>
                           <li ><input type="checkbox" id="boots" /> Jewelery</li>
                           <li ><input type="checkbox" id="all" /> Electronics</li>
                        </ul>
                        <hr></hr>
                     </div>
                  </div>
               </div>
               </i> </div>

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