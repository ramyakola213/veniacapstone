import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/cart';
import CheckoutDetails from './components/Cart/checkOut';
import Order from './components/Cart/Order';
import Homepage from './components/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.scss';
import './root.scss';


function App() {
  return (
          <div>
            <Header></Header>
          
            <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
              <Route exact path="/products" element={<Products/>}></Route>
              <Route exact path="/ProductList" element={ <ProductList/>}></Route>
              <Route exact path="/products/:id" element={ <ProductDetails/>}/>
              <Route exact path="/Cart" element={ <Cart/>}/>
              <Route exact path="/checkout" element={ <CheckoutDetails/>}/>
              <Route exact path="/order" element={ <Order/>}/> </Routes>
            <Footer/>
            
          </div>
  );
}

export default App;
