
import React from "react";


const Breadcrum = ()=>{
        return (
                  <div>
                  <div className="aem-Grid aem-Grid--12">

                        <div  className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                              <p> Clothing / Women's / Outwear</p>
                        </div>
                        <div  className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                              <p><b>25 Results</b></p>
                        </div>
                        <div  className="aem-GridColumn aem-GridColumn--default--3 filter-input">
                        <select className="sort"><option value="Latest"> Latest</option>
                        <option value="old"> New</option><option value="old"> old</option></select>
                        </div>
                  </div>
                        
                  </div>
        );
}

export default Breadcrum;