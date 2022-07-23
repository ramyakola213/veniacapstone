
import React, { useState, useEffect} from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {NavLink} from "react-router-dom";
import ProductDetails from "./ProductDetails";



const Filter = ()=>{

        const [data, setData] = useState([]);
        const [filter, setFilter] = useState(data);
       
        let componentMounted = true;

        useEffect(() => {

                const getProducts = async () => {
                       
                        const response = await fetch("https://fakestoreapi.com/products");
                        if (componentMounted) {
                                setData(await response.clone().json());
                                setFilter(await response.json());
                               
                                console.log(filter);


                        }
                        return () => {
                                componentMounted = false;
                        }
                }

                getProducts();

        }, []);

        const filterProduct =(cat)=>{
                const updatedList = data.filter((x)=>x.category == cat);
                setFilter(updatedList);

        }

        return(


                <div className="aem-GridColumn aem-GridColumn--default--3">  
                <div className="sidebar">
                    Filters
                    <hr></hr>  
                    Categories        
                <ul data-accordion className="categories cat"> 
                 <li  onClick={()=>filterProduct("women's clothing")}><input type="checkbox" id="high" /> Women's Collection </li>
                 <li  onClick={()=> filterProduct("men's clothing")}><input type="checkbox" id="low" /> Men's collection </li>
                 <li  onClick={()=>filterProduct("jewelery")} ><input type="checkbox" id="boots"/> Jewelery</li>
                 <li  onClick={()=>filterProduct("electronics")}><input type="checkbox" id="all" /> Electronics</li>
                </ul>
                <hr></hr>
               

                </div>
               </div>

        );

}

export default Filter;
