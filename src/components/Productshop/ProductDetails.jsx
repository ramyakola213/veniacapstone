import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import edit from "../../assets/edit-2.svg";
import heart from "../../assets/heart.svg";
import gradone from "../../assets/Swatch 01.png";
import gradtwo from "../../assets/Swatch 02.png";
import gradfour from "../../assets/Swatch 04.png";
import Loader from './loader';


const ProductDetails = () => {



        const { id } = useParams();
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(false);

        const dispatch = useDispatch();

        
        let componentMounted = true;

        useEffect(() => {
                const getProduct = async () => {
                        setLoading(true);
                        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                        if (componentMounted) {
                                setProduct(await response.json());
                                setLoading(false);
                        }
                        return () => {
                                componentMounted = false;
                        }
                }
                getProduct();

        }, []);

        const Loading = () => {
                return (
                        <>
                           <Loader/>
                        </>
                )
        }


                let inputVal = React.createRef();
                let [num, setQuantity] = useState(1);
              
                let increaseQuantity = () => {
                    if (num < 20) {
                    setQuantity(Number(num) + 1);
                    }
                };
            
                let decreaseQuantity = () => {
                    if (num > 0) {
                    setQuantity(num - 1);
                    }
                }
            
                let handleChange = (e) => {
                    setQuantity(e.target.value);
                }

                const addProduct = (product) => {
                        let item = { ...product, quantity: num }
                        dispatch(addCart(product));
                }
        
               const ShowProductDetails = () => {
                return (
                        <>
                             <div className="aem-Grid aem-Grid--12">
                              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                        <ul className="pd-ul">
                                                <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                                                <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                                                <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                                                <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                                        </ul>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                        <img src={product.image} alt={product.title} height="400px" width="250px" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--10">
                                          <h5 className="text-uppercase">
                                                Products  / {product.category} /
                                          </h5>
                                            <h3 className="display-m-24- ">{product.title}</h3>
                                            <h3 className="">
                                                $ {product.price}
                                            </h3>
                                        <p className="">Rating {product.rating && product.rating.rate} </p>

                                        <p className="lead"> {product.description}</p>
                                        <hr></hr>


                                           <p className='regular-heading-s-14-'>Quantity</p>
                                           <ul data-accordion className="categories size">
                                              <li ><button className="plus" onClick={decreaseQuantity} >-</button>   </li>
                                              <li ><input  className="quant" ref={inputVal}  value={num} onChange={handleChange}></input>   </li>
                                              <li ><button className="plus" onClick={increaseQuantity}>+</button>    </li>
                                           </ul>

                                        <NavLink to="/Cart">
                                                <button className="add-to-cart" onClick={() => addProduct(product)}  >
                                                        Add to Cart
                                                </button>
                                        </NavLink>

                                </div>
                                </div>
                               

                                        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--10 container contain">
                                                <h3 className="display-m-24-">{product.title}</h3>
                                                <p>Description</p>
                                                <p > {product.description}</p>

                                        </div>
                                     
                                    
                               

                        </>
                )
        }


        return (
                <div>
                        <div className="conatainer">
                                <div className="aem-Grid product-details">
                                        <div className="aem-Grid aem-Grid--12">
                                                {loading ? <Loading /> : <ShowProductDetails />}
                                        </div>
                                </div>
                        </div>
                </div>
        )

}

export default ProductDetails;