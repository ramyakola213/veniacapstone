import {handleCart } from "./handleCart";
import { payment } from "./payment";
import { shipping } from "./shipping";
import { contactInfo } from "./contactInfo"
import { combineReducers } from "redux";
 
const rootReducers = combineReducers ({
        handleCart,
        payment,
        shipping,
        contactInfo
})
export default rootReducers;