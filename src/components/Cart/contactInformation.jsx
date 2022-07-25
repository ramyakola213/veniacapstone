import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../../assets/edit-blue.svg";
import { saveContactInfo } from '../../redux/action/index';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class GuestContactInformation extends Component {

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
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleSubmit(event) {
        this.setState({ submitted: true });
        let contactSubmitted = {
            ...this.state,
            submitted: true
        }
        this.props.saveContactInfo(contactSubmitted);
        event.preventDefault();
    }

    updateSubmittedFlag(value) {
        this.setState({ submitted: value });
    }
    contactInfo = () => {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
                <h3> Contact Information</h3>
                <p>We'll use these details to kepp you informed on your delivery</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                            <label>Email  <input type="email" class="input" value={this.state.email} onChange={(event) => this.handleChange('email', event)} /></label>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 input_wrap">
                            <label>Phone Number <input type="tel" class="input" value={this.state.phoneNumber} onChange={(event) => this.handleChange('pNumber', event)} /></label><br />
                        </div>
                    </div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <p>1. Shipping Information</p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="aem-Grid aem-Grid--12 ">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label>
                                            Country<br />
                                            <select value={this.state.country} onChange={(event) => this.handleChange('country', event)} >
                                                <option value="United States">United States</option> 
                                                <option value="India">India</option>
                                                <option value="Uk">UK</option>
                                                <option value="New Zeland">New Zeland</option> 
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="aem-Grid aem-Grid--12 ">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label> First Name  <input type="text" class="input" value={this.state.firstName} onChange={(event) => this.handleChange('fName', event)} /></label>
                                    </div>

                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label>Last Name<input type="text" class="input" value={this.state.lastName} onChange={(event) => this.handleChange('lName', event)} /></label>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label>Street Address <input type="text" class="input" value={this.state.add1} onChange={(event) => this.handleChange('add1', event)} /></label> 
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label>Street Address2 <input type="text" class="input" value={this.state.add2} onChange={(event) => this.handleChange('add2', event)} /></label> 
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 input_wrap">
                                        <label>City <input type="text" class="input" value={this.state.city} onChange={(event) => this.handleChange('city', event)} /></label> 
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 input_wrap">
                                        <label>
                                            State 
                                            <select value={this.state.stateVal} onChange={(event) => this.handleChange('state', event)} >
                                                <option value="AndhraPradesh">AndhraPradesh</option>
                                                <option value="Telengana">Telengana</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="TamilNadu">Tamil Nadu</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 input_wrap">
                                        <label>ZipCode  <input type="number" class="input" value={this.state.zipCode} onChange={(event) => this.handleChange('zip', event)} /></label>
                                    </div>
                                </div>
                                <div className="aem-Grid aem-Grid--12 checkout_wrapper__button_wrap ">
                                    <button type="submit" className="secondary_button" value="CONTINUE" >CONTINUE TO SHIPPING METHOD</button>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <hr className="mr-10" />
                </form>
            </div>
        )
    }
    displayContactInfo = () => {
        return (
            <div className="checkout_wrapper__edit_wrapper" >
                <div className="aem-Grid aem-Grid--12">
                <h5>Shipping Information</h5>
                <span  onClick={() => this.updateSubmittedFlag(false)}><img src={edit} alt="search" className="icon-img" />Edit</span>
                </div>
                {this.props.contactInformation.contactDetails ? <div className="aem-Grid aem-Grid--12">
                
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <p>{this.props.contactInformation.contactDetails.email},<br/> 
                    {this.props.contactInformation.contactDetails.phoneNumber}</p>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">

                    <p>{this.props.contactInformation.contactDetails.firstName + this.props.contactInformation.contactDetails.lastName}<br/>
                     {this.props.contactInformation.contactDetails.add1}</p> 
                     <p> {  this.props.contactInformation.contactDetails.add2}</p>
                     <p> {  this.props.contactInformation.contactDetails.zipCode}</p>
                </div>
                </div> : ''}

            </div>
        )
    }


    render() {
        return (
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                {this.state.submitted === false ? this.contactInfo() : ''}
                {this.state.submitted === true && (this.props.contactInformation && this.props.contactInformation.contactDetails) ? this.displayContactInfo() : ''}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    contactInformation: state.handleCart
})
const mapDispatchToProps = {
    saveContactInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestContactInformation);