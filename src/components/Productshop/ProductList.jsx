
import React, { useState, useEffect } from "react";
import heart from '../../assets/heart.svg';
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import Filter from "./filter";
import Loader from './loader';



const ProductList = () => {
        const [data, setData] = useState([]);
        const [filter, setFilter] = useState(data);
        const [loading, setLoading] = useState(false);
        const [checked, setChecked] = useState(false);
        const onChangeAttribute = (value) => {

                setChecked(value);
        };
        let componentMounted = true;

        useEffect(() => {

                const getProducts = async () => {
                        setLoading(true);
                        const response = await fetch("https://fakestoreapi.com/products");
                        if (componentMounted) {
                                setData(await response.clone().json());
                                setFilter(await response.json());
                                setLoading(false);
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

                                <Loader />


                        </>


                )
        }

        const filterProduct = (cat) => {
                const updatedList = data.filter((x) => x.category == cat);
                setFilter(updatedList);

        }

        const ShowProductList = (product) => {
                return (
                        <>
                                <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                                <p> Clothing / Women's / Outwear</p>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <p><b>{filter.length} Items found</b></p>
                                        </div>

                                        <div className="aem-GridColumn aem-GridColumn--default--3 filter-input">
                                                <select className="sort">
                                                        <option value="Latest"  > <li onClick={() => filterProduct("women's clothing")}>Sort by Latest</li></option>
                                                        <option value="old" onClick={() => filterProduct("jewelery")}>Sort by  Old</option>
                                                        <option value="old"  ><li onClick={() => filterProduct("men's clothing")}>Sort by Low Price</li></option>
                                                </select>
                                        </div>

                                </div>
                                <div className="aem-Grid aem-Grid--12">
                                        <Filter filterProduct={filterProduct} onChangeAttribute={onChangeAttribute} checked={checked} />
                                        <div className="aem-GridColumn aem-GridColumn--default--9">
                                                <div className="aem-Grid aem-Grid--12">
                                                        {filter.map((product) => {
                                                                return (
                                                                        <div className="product-card aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6" >
                                                                                <NavLink to={`/products/${product.id}`}>
                                                                                        <div className="card-img">
                                                                                                <img src={product.image} className="card-img-top" alt={product.title} />
                                                                                        </div>
                                                                                        <h5 className="product-card_product--title">{product.title.substring(0, 10)}</h5>
                                                                                        <h6 className=" "> ${product.price}</h6>
                                                                                        <img src={heart} className="heart" alt="heart" />
                                                                                </NavLink>
                                                                        </div>
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

                                        {loading ? <Loading /> : <ShowProductList />}

                                </div>
                        </div>
                </div>
        );
}

export default ProductList;