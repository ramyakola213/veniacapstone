import React from "react";
import "./accord.scss";
import arrow from '../../assets/chevron-down.png';
import {useState, useEffect} from "react";


function Accord({panel, heading}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className='displaycart-wrap__toggle' onClick={() => setIsOpen(!isOpen)}>
     <span className="displaycart-wrap__left">{heading}
       </span>
          <span className="displaycart-wrap__right">
          20% discount applied
            <span className={isOpen ? '' : ''}>
              <img src={arrow}/>

            </span>
            </span>
      </div>
    <div className={isOpen ? 'displaycart-wrap__content displaycart-wrap__show' : 'displaycart-wrap__content'}>{panel}</div>
   </>
  )
}

export default Accord