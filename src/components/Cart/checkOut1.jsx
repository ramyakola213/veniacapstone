import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import edit from "../../assets/edit-2.svg";
import { saveContactInfo, saveShippingInfo } from '../../redux/action/index';

class CheckoutDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            country: '',
            firstName: '',
            lastName: '',
            add1: '',
            add2: '',
            city: '',
            stateVal: '',
            zipCode: '',
            submitted: false,
            shippingMethod: {
                shippingval: '',
                shippingMethodSubmitted: false
            }
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeShippingMethod = this.handleChangeShippingMethod.bind(this);
        this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    }

    handleChange(inputType = 'fName', event) {
        switch (inputType) {
            case 'email':
                this.setState({ email: event.target.value })
                break;
            case 'pNumber':
                this.setState({ phoneNumber: event.target.value })
                break;
            case 'country':
                this.setState({ country: event.target.value })
                break;
            case 'fName':
                this.setState({ firstName: event.target.value })
                break;
            case 'lName':
                this.setState({ lastName: event.target.value })
                break;
            case 'add1':
                this.setState({ add1: event.target.value })
                break;
            case 'add2':
                this.setState({ add2: event.target.value })
                break;
            case 'city':
                this.setState({ city: event.target.value })
                break;
            case 'state':
                this.setState({ stateVal: event.target.value })
                break;
            case 'zip':
                this.setState({ zipCode: event.target.value })
                break;
            default:
                this.setState({ firstName: '' })
                break

        }
    }
    handleChangeShippingMethod(event) {
        this.setState({ shippingMethod: {shippingval: event.target.value} })
        this.setState({ shippingMethod: {shippingMethodSubmitted: false} })
    }
    handleSubmit(event) {
        this.setState({ submitted: true });
        this.props.saveContactInfo(this.state);
        event.preventDefault();
    }

    handleBtnSubmit(event) {

        this.setState({ shippingMethod: {shippingMethodSubmitted: true} })
        this.props.saveShippingInfo(this.state.shippingMethod);
        event.preventDefault();
    }

    updateSubmittedFlag(value) {
        this.setState({ submitted: value });
    }
    updateShippingMethodSubmittedFlag(val) {
        this.setState({ shippingMethodSubmitted: val })
    }
    contactInfo = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <h3>Contact Information</h3>
                <h4>We'll use these details to kepp you informed on your delivery</h4>
                <form onSubmit={this.handleSubmit}>
                    <span>
                        <label>Email <br /><input type="email" value={this.state.email} onChange={(event) => this.handleChange('email', event)} /></label>
                        <label>Phone Number <input type="tel" value={this.state.phoneNumber} onChange={(event) => this.handleChange('pNumber', event)} /></label><br />
                    </span>
                    <p>1. Shipping Information</p>
                    <label>
                        Country<br />
                        <select value={this.state.country} onChange={(event) => this.handleChange('country', event)} >
                            <option value="India">India</option>
                        </select>
                    </label><br />
                    <label> First Name <br /><input type="text" value={this.state.firstName} onChange={(event) => this.handleChange('fName', event)} /></label><br />
                    <label>Last Name<br /><input type="text" value={this.state.lastName} onChange={(event) => this.handleChange('lName', event)} /></label><br />
                    <label>Street Address<br /><input type="text" value={this.state.add1} onChange={(event) => this.handleChange('add1', event)} /></label><br />
                    <label>Street Address2<br /><input type="text" value={this.state.add2} onChange={(event) => this.handleChange('add2', event)} /></label><br />
                    <label>City<br /><input type="text" value={this.state.city} onChange={(event) => this.handleChange('city', event)} /></label><br />
                    <label>
                        State<br />
                        <select value={this.state.stateVal} onChange={(event) => this.handleChange('state', event)} >
                            <option value="AndhraPradesh">AndhraPradesh</option>
                            <option value="Telengana">Telengana</option>
                            <option value="Kerala">Kerala</option>
                            <option value="TamilNadu">Tamil Nadu</option>
                        </select>
                    </label><br />
                    <label>ZipCode<br /> <input type="number" value={this.state.zipCode} onChange={(event) => this.handleChange('zip', event)} /></label>
                    <input type="submit" value="CONTINUE TO SHIPPING METHOD" />
                </form>
            </div>
        )
    }
    displayContactInfo = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" style={{ borderStyle: "groove" }}>
                <span>Shipping Information</span>
                <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--3 banner-right" onClick={() => this.updateSubmittedFlag(false)}><img src={edit} alt="search" className="icon-img" />Edit</div>
                {this.props.contactInformation.contactDetails ? <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                    <p>{this.props.contactInformation.contactDetails.email}, {this.props.contactInformation.contactDetails.phoneNumber}</p>
                    <p>{this.props.contactInformation.contactDetails.firstName + this.props.contactInformation.contactDetails.lastName}, {this.props.contactInformation.contactDetails.add1 + this.props.contactInformation.contactDetails.add2}</p>
                </div> : ''}

            </div>
        )
    }

    shippingMethod = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <form onSubmit={this.handleBtnSubmit}>
                    <p>2. Shipping Method</p>
                    <div onChange={this.handleChangeShippingMethod}>
                        <input type="radio" value="standard" name="shipping" /> Standard Shipping (4-8 business days via USPS) FREE
                        <input type="radio" value="express" name="shipping" /> Express Delivery (2-5 business days via USPS) $17.95
                        <input type="radio" value="nextDay" name="shipping" />  Next Day Delivery (Next business days via FedEx) $53.61
                    </div>
                    <input type="submit" value="CONTINUE TO PAYMENT METHOD" />
                </form>
            </div>
        )
    }

    displayShippingMethod = () => {
        debugger
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" style={{ borderStyle: "groove" }}>
                <span>Shopping Method</span>
                <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--3 banner-right" onClick={() => this.updateShippingMethodSubmittedFlag(false)}><img src={edit} alt="search" className="icon-img" />Edit</div>
                {this.props.contactInformation.contactDetails ? <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                    <p>{this.props.contactInformation.contactDetails.shippingval === 'standard' ?
                        <div>
                            <p>Standard Shipping</p><br/>
                            <p>Est. delivery in 4 - 8 business days</p><br/>
                            <p>FREE</p><br/>
                        </div> : ''}</p>
                </div> : ''}
            </div>
        )
    }
    render() {
if(this.props.contactInformation) {
    debugger
}
        return (

            <section className="container">
                <div className="aem-Grid aem-Grid--12"><h1>Checkout</h1><hr></hr></div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                    <h2> Guest Checkout</h2>
                    {this.state.submitted === false ? this.contactInfo() : ''}
                    {this.state.submitted === true && (this.props.contactInformation && this.props.contactInformation.contactDetails) ? this.displayContactInfo() : ''}
                    {this.state.shippingMethod.shippingMethodSubmitted === false ? this.shippingMethod(): ''}
                    {this.state.shippingMethod.shippingMethodSubmitted === true && (this.props.contactInformation && this.props.contactInformation.contactDetails) ? this.displayShippingMethod() : ''}
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    contactInformation: state.handleCart
})
const mapDispatchToProps = {
    saveContactInfo,
    saveShippingInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);