
import React, { useState, useEffect} from "react";
import heart from '../../assets/heart.svg';
import "react-loading-skeleton/dist/skeleton.css";
import {NavLink} from "react-router-dom";
import ProductDetails from "../Productshop/ProductDetails";



const ProductList = ()=>{


        const [data, setData] = useState([]);
        const [filter, setFilter] = useState(data);
        const [loading, setLoading] = useState(false);
        let componentMounted = true;

        useEffect(() => {

                const getProducts = async () => {
                        setLoading(true);
                        const response = await fetch("https://fakestoreapi.com/products");
                        if (componentMounted) {
                                setData(await response.clone().json());
                                setFilter(await response.json());
                                setLoading(false);
                                console.log(filter);


                        }
                        return () => {
                                componentMounted = false;
                        }
                }

                getProducts();

        }, []);

        const Loading = () => {
                return (
                        <>

                        Loading...
                        
                     
                        </>


                )
        }


        const filterProduct =(cat)=>{
                const updatedList = data.filter((x)=>x.category == cat);
                setFilter(updatedList);

        }


        const ShowProductList = () => {
                return (
                        <>
                                 <div className="aem-Grid aem-Grid--12">
                                       
                                       <div  className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                             <p> Clothing / Women / Outwear</p>
                                       </div>
                                       <div  className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                             <p><b>25 Results</b></p>
                                       </div>
                                       <div  className="aem-GridColumn aem-GridColumn--default--3 filter-input">
                                       <select className="sort"><option value="Latest"  onClick={()=>filterProduct("women's clothing")}> Latest</option>
                                       <option value="old"  onClick={()=> filterProduct("men's clothing")}> New</option><option value="old"  onClick={()=>filterProduct("jewelery")}> Old</option></select>
                                       </div>
                                   </div>
                   <div className="aem-Grid aem-Grid--12">           
                       <div className="aem-GridColumn aem-GridColumn--default--3">  
                         <div className="sidebar">
                             Filters
                             <hr></hr>  
                             Categories        
                         <ul data-accordion className="categories cat"> 
                          <li  onClick={()=>filterProduct("women's clothing")}><input type="checkbox"  /> Women's Collection </li>
                          <li  onClick={()=> filterProduct("men's clothing")}><input type="checkbox"  /> Men's collection </li>
                          <li  onClick={()=>filterProduct("jewelery")} ><input type="checkbox" /> Jewelery</li>
                          <li  onClick={()=>filterProduct("electronics")}><input type="checkbox" /> Electronics</li>
                         </ul>
                         <hr></hr>
                        

                         </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--9">
                        <div className="aem-Grid aem-Grid--12">  

                                {filter.map((product) => {
                                                return (
                                                        <>       
                                                          
                                                               <div className="product-card aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4" >
                                                               <NavLink to={`/products/${product.id}`}> 
                                                                        <div className="card-img">
                                                                            <img src={product.image} className="card-img-top" alt={product.title} />
                                                                        </div> 
                                                                                
                                                                          <h5 className="">{product.title.substring(0,18) }</h5>
                                                                            <h6 className=" "> ${product.price}</h6>
                                                                          <img src={heart} className="heart" alt="heart"/>
                                                                                      
                                                                                
                                                                </NavLink>       
                                                                </div>
                                                                
                                                        </>
                                                )
                                        })
                                }
                                </div>
                                </div>
                                </div>
                        </>

                )
        }


        return (

                <div className="product-list">
                    <div className="aem-Grid">
               
                      <div className="aem-Grid aem-Grid--12">
                             
                             { loading ? <Loading /> : <ShowProductList /> }
                 
                      </div>
                   </div>
                </div>
        );
}

export default ProductList;