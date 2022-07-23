import React from "react";
import bg from "../../assets/bg.jpg";
import ProductList from "../Productshop/ProductList";



const Products = ()=>{
        return (

              <>
                <div className="aem-Grid aem-Grid--3  banner">
                  <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--3 ">
                    <div className="banner-left">
                       <h1>Women's <hr></hr> </h1>
                                  
                    </div>
                  </div>
                  <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--3 banner-right"> <img src={bg} width="100%" height="50%" alt="banner" /> </div>
                </div>
                 <section className="container">
                  <ProductList> </ProductList>
                 </section>
                </>
        );
}

export default Products;