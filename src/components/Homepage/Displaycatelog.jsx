import React from "react";
import { NavLink } from "react-router-dom";


const Displayproducts = () =>{
  
        return(
	<section className="catelog_wrapper">
		<div className="catalogs">
			<div class="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--default--3">
				<div class="catalog-list">
					<div class="catalog-image">
						<img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="Shop Women" width="160" />
					</div>
					<div class="catalog-tag">
					<NavLink to="/Products"><h5>Shop Women</h5><span>We have latest sport suit for women</span></NavLink>
					</div>
				</div>
			</div>
			<div class="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--default--3">
				<div class="catalog-list">
					<div class="catalog-image">
						<img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Shop Women" width="160" />
					</div>
					<div class="catalog-tag">
					<NavLink to="/Products"><h5>Shop Men</h5><span>Men hoodie sale is going on</span></NavLink></div>
				</div>
			</div>
			<div class="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--default--3">
				<div class="catalog-list">
					<div class="catalog-image">
						<img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Shop Women" width="160" />
					</div>
					<div class="catalog-tag">
					<NavLink to="/Products">	<h5>Shop Jewellary</h5><span>Lotest model  braceletes are available</span></NavLink></div>
				</div>
			</div>
			<div class="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--default--3">
				<div class="catalog-list">
					<div class="catalog-image">
						<img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="Shop Women" width="160" />
					</div>
					<div class="catalog-tag">
					<NavLink to="/Products"><h5>Shop Electronics</h5>
						<span>Best deals with best prices</span></NavLink>
					</div>
				</div>
			</div>
		</div>
	</section>
             
        )

}

export default Displayproducts;