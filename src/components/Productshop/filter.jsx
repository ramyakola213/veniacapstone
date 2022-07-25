
import React, { useState, useEffect} from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {NavLink} from "react-router-dom";
import ProductDetails from "../../components/Productshop/ProductDetails";



const Filter = (props)=>{


        return(


                <div className="aem-GridColumn aem-GridColumn--default--3">  
                <div className="sidebar">
                    Filters
                    <hr></hr>  
                    Categories        
                <ul data-accordion className="categories cat"> 
                 <li  ><input onClick={()=>props.filterProduct("women's clothing")}  type="checkbox" id="high" /> Women's Collection </li>
                 <li  onClick={()=>props.filterProduct("men's clothing")}><input type="checkbox" id="low" /> Men's collection </li>
                 <li  onClick={()=>props.filterProduct("jewelery")} ><input type="checkbox" id="boots"/> Jewelery</li>
                 <li  onClick={()=>props.filterProduct("electronics")}><input type="checkbox" id="all" /> Electronics</li>
                </ul>
                <hr></hr>
               

                </div>
               </div>

        );

}

export default Filter;
