
import React, { useState, useEffect } from "react";






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

                                <hr></hr>


                        </div>
                </div>

        );

}

export default Filter;
