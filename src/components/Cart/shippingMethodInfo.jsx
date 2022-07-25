import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../../assets/edit-blue.svg";
import { saveShippingInfo } from '../../redux/action/index';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class ShoppingMethods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shippingval: '',
            shippingMethodSubmitted: false
        };

        this.handleChangeShippingMethod = this.handleChangeShippingMethod.bind(this);
        this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    }

    handleChangeShippingMethod(event) {
        this.setState({ shippingval: event.target.value })
    }

    handleBtnSubmit(event) {
        this.setState({ shippingMethodSubmitted: true });
        let shipping = {
            ...this.state,
            shippingMethodSubmitted: true
        }
        this.props.saveShippingInfo(shipping);
        event.preventDefault();
    }

    updateShippingMethodSubmittedFlag(val) {
        this.setState({ shippingMethodSubmitted: val })
    }

    shippingMethod = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <form onSubmit={this.handleBtnSubmit}>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <p>2. Shipping Method</p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div onChange={this.handleChangeShippingMethod}>
                                    <div className="aem-Grid aem-Grid--12 space-wrap">
                                        <input type="radio" value="standard" name="shipping" /> Standard Shipping (4-8 business days via USPS) FREE
                                    </div>
                                    <div className="aem-Grid aem-Grid--12 space-wrap">
                                        <input type="radio" value="express" name="shipping" /> Express Delivery (2-5 business days via USPS) $17.95
                                    </div>
                                    <div className="aem-Grid aem-Grid--12 space-wrap ">
                                        <input type="radio" value="nextDay" name="shipping" />  Next Day Delivery (Next business days via FedEx) $53.61
                                    </div>
                                </div>
                                <div className="aem-Grid aem-Grid--12 checkout_wrapper__button_wrap ">
                                    <button type="submit"  className="secondary_button" value="CONTINUE" >CONTINUE TO PAYMENT METHOD</button>
                                </div>   
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <hr className="mr-10"/>
                </form>
            </div>
        )
    }

    displayShippingMethod = () => {
        return (

            <div className="checkout_wrapper__edit_wrapper" >
            <div className="aem-Grid aem-Grid--12">
            <h5>Shopping Method</h5>
            <span  onClick={() => this.updateShippingMethodSubmittedFlag(false)}><img src={edit} alt="search" className="icon-img " />Edit</span>
            </div>

       
                {this.props.shippinginfo.shippingMethodDetails ? <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                    <p>{this.props.shippinginfo.shippingMethodDetails.shippingval === 'standard' ?
                        <div>
                            <p>Standard Shipping</p>
                            <p>Est. delivery in 4 - 8 business days</p>
                            <p>FREE</p>
                        </div> : ''}</p>
                </div> : ''}

            </div>
        )
    }
    render() {
        if (this.props.shippinginfo) {
           
        }
        return (

            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                {this.state.shippingMethodSubmitted === false ? this.shippingMethod() : ''}
                {this.state.shippingMethodSubmitted === true && (this.props.shippinginfo && this.props.shippinginfo.shippingMethodDetails) ? this.displayShippingMethod() : ''}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    shippinginfo: state.shipping
})
const mapDispatchToProps = {
    saveShippingInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingMethods);