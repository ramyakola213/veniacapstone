import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../../assets/edit-2.svg";
import { paymentCardInfo } from '../../redux/action/index';
// import quest from "../../assets/quest.PNG";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class PaymentInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameonCard: '',
            creditCardnumber: '',
            expirationDate: '',
            cvv: '',
            submittedCardDetails: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    }

    handleChange(inputType = 'name', event) {
        switch (inputType) {
            case 'name':
                this.setState({ nameonCard: event.target.value })
                break;
            case 'creditNo':
                this.setState({ creditCardnumber: event.target.value })
                break;
            case 'date':
                this.setState({ expirationDate: event.target.value })
                break;
            case 'cvv':
                this.setState({ cvv: event.target.value })
                break;
            default:
                this.setState({ nameonCard: '' })
                break

        }
    }

    handleBtnSubmit(event) {
        this.setState({ submittedCardDetails: true });
        let paymentData = {
            ...this.state,
            submittedCardDetails: true
        }
        this.props.paymentCardInfo(paymentData);
        event.preventDefault();
    }

    updateMethodSubmittedFlag(val) {
        this.setState({ submittedCardDetails: val })
    }

    paymentDetails = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 checkout_wrapper__payment_wrapper">
                <form onSubmit={this.handleBtnSubmit}>
                <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                <p>3. Payment Information</p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                   
                    <div className="aem-Grid aem-Grid--12">
                    <input type="radio" value="standard" name="credit" /> Credit Card
                    </div>
                    <div className="aem-Grid aem-Grid--12 mt-10">
                    <label>Name On Card <input type="text" class="input" value={this.state.nameonCard} onChange={(event) => this.handleChange('name', event)} /></label>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                    <label>Credit Card Number <input type="number" class="input" value={this.state.creditCardnumber} onChange={(event) => this.handleChange('creditNo', event)} /></label>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pr-10">
                    <label>Expiration Date <input type="text" class="input input-expiry"  value={this.state.expirationDate} onChange={(event) => this.handleChange('date', event)} /></label>
                    </div>
                    
                    
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
                    <label>CVV <input type="number" class="input" value={this.state.cvv} onChange={(event) => this.handleChange('cvv', event)} /> </label> 
                    
                    </div>
                     </div>
                     <div className="aem-Grid aem-Grid--12 checkout_wrapper__button_wrap ">
                                    <button type="submit"  className="secondary_button" value="CONTINUE" >CONTINUE TO REVIEW ORDER</button>
                                </div>
                     </AccordionItemPanel>
                     </AccordionItem>
                     </Accordion>
                     <hr className="mr-10"/>
                </form>
            </div>
        )
    }

    displayPayment = () => {
        return (
            <div className="checkout_wrapper__edit_wrapper" >
            <div className="aem-Grid aem-Grid--12">
            <h5>Payment Information</h5>
            <span onClick={() => this.updateMethodSubmittedFlag(false)}><img src={edit} alt="search" className="icon-img" />Edit</span>
            </div>

                {this.props.paymentInfo.paymentDetails ? <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                    <p>{this.props.paymentInfo.paymentDetails.creditCardnumber ?
                        <div>
                            <p>Credit Card</p>
                            <p>VISA ending in {this.props.paymentInfo.paymentDetails.creditCardnumber.slice(-4)}</p><br />
                        </div> : ''}</p>
                </div> : ''}

            </div>
        )
    }
    render() {
        return (

            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                {this.state.submittedCardDetails === false ? this.paymentDetails() : ''}
                {this.state.submittedCardDetails === true && (this.props.paymentInfo && this.props.paymentInfo.paymentDetails) ? this.displayPayment() : ''}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    paymentInfo: state.payment
})
const mapDispatchToProps = {
    paymentCardInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo);