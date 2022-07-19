import React from "react";
import { ReactDOM } from "react";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Header = () => {
   const stateData = useSelector(state => state.handleCart)
   console.log('state Data', stateData)

   return (


      <header>
         <div className="aem-Grid">


            <i className="fas fa-bars dropdown">

               <h1 className=""> <NavLink to="/">V E N I A </NavLink></h1>
               <ul >

                  {/* <li> <NavLink to="/Products" ><img src={search} alt="search" className="icon-img" /> </NavLink></li> */}

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
            </i>

         </div>

         <nav>
         <NavLink to="/"> <h4 className="logo">V E N I A</h4></NavLink>
            <ul>
               <li><NavLink to="/Products" > Products </NavLink></li>
               <li><NavLink to="/Products" > Women </NavLink></li>
               <li> <NavLink to="/Products" >Men </NavLink></li>
               <li> <NavLink to="/Products" >Electronics </NavLink></li>
               <li><NavLink to="/Products" > Jewellary</NavLink></li>

            </ul>
            <ul>
               {/* <li> <NavLink to="/Products" ><img src={search} alt="search" className="icon-img" />Search </NavLink></li>
               <li> <NavLink to="/Products" ><img src={user} alt="user" className="icon-img" />Sign in </NavLink></li> */}
               <li> <NavLink to="/cart" storeData={stateData ? stateData.length > 0 ? stateData : [] : []} ><img src={cart} alt="user" className="icon-img" />{stateData ? stateData.length > 0 ? stateData.length : '' : ''} </NavLink></li>
            </ul>
         </nav>

      </header>


   )
}

export default Header;