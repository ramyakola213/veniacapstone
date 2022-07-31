
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";





const Filter = (props) => {

        const list = ["women's clothing", "men's clothing", "jewelery", "electronics"]

        return (
                <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className="sidebar">
                                Filters
                                <hr></hr>
                                Categories
                                {list.map((item, index) => (
                                        <div key={index} onClick={() => props.filterProduct(item)}>
                                                <input
                                                        // className={props.className}
                                                        name={item}
                                                        checked={props.checked === item}
                                                        onChange={() => props.onChangeAttribute(item)}
                                                        type="checkbox"
                                                />
                                                <span>{item}</span>
                                        </div>
                                ))}
                                {/* <ul data-accordion className="categories cat"> 
                 <li  ><input onClick={()=>props.filterProduct("women's clothing")}  type="checkbox" id="high" /> Women's Collection </li>
                 <li  onClick={()=>props.filterProduct("men's clothing")}><input type="checkbox" id="low" /> Men's collection </li>
                 <li  onClick={()=>props.filterProduct("jewelery")} ><input type="checkbox" id="boots"/> Jewelery</li>
                 <li  onClick={()=>props.filterProduct("electronics")}><input type="checkbox" id="all" /> Electronics</li>
                </ul> */}
                                <hr></hr>


                        </div>
                </div>

        );

}

export default Filter;
