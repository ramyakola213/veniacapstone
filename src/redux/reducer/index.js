import {handleCart } from "./handleCart";
import { payment } from "./payment";
import { shipping } from "./shipping";
import { combineReducers } from "redux";
 
const rootReducers = combineReducers ({
        handleCart,
        payment,
        shipping
})
export default rootReducers;