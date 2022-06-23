import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import '../App.css';

const DonationForm = (props) => {
    const getDonationSchema = () =>
        yup.object().shape({
            cardNumber: yup.string()
                            .min(19,"Must be minimum 16 digits")
                            .matches(/^((\d+)+\s?)*$/, 'The field should have digits only')
                            .required('Required'),
            cardHolder: yup.string().required('Required'),
            cardMonth: yup.string().required('Required')
                            .matches(/^\d+$/, 'The field should have digits only'),
            cardYear: yup.string().required('Required')
                            .matches(/^\d+$/, 'The field should have digits only'),
            amount: yup.number().integer().required('Required'),
            email: yup.string().email('Invalid email format').required('Required'),
            cvv: yup.string().required('Required')
                    .matches(/^\d+$/, 'The field should have digits only')
        });

    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <Formik 
                    initialValues={{
                        amount:25,
                        cardNumber:'',
                        cardHolder:'',
                        cardMonth:'',
                        cardYear:'',
                        cvv:'',
                        email:''
                    }}
                    validationSchema={getDonationSchema()}
                    onSubmit={(values) => {
                        {/* Set donation email and donation amount for other components to use */}
                        props.emailValueChange(values.email);
                        props.donationValueChange(values.amount);

                        values.cardNumber.replace(' ','');
                        {/* Calls to API should go here */}
                        console.log('Sending details to processor:');
                        console.log(values);

                        if(values.amount >= props.minimumDonationToGetGift){
                            props.advanceProcess('gift');
                        }
                        else{
                            props.advanceProcess('finished');
                        }  
                    }}
                >
                {({touched, errors, isSubmitting, isValid, values }) => 
                    (
                        <Form>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Donation Form</h2>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="amount">Donation Amount in $</label>
                                    <Field
                                        type="amount"
                                        name="amount"
                                        placeholder="Enter amount in total $"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.amount && errors.amount ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="amount"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-12 py-2">
                                    <h5>Card Details</h5>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="cardHolder">Card Holder</label>
                                    <Field
                                        type="cardHolder"
                                        name="cardHolder"
                                        placeholder="Enter the card holder"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    {/* Will display credit card number in format of XXXX XXXX XXXX XXXX */}
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <Field
                                        type="cardNumber"
                                        name="cardNumber"
                                        value={
                                            values.cardNumber
                                            .replace(/[^\d()]+/g, "")
                                            .replace(/(\d{4})/g, "$1 ")
                                            .trim()}
                                        placeholder="Enter your card number"
                                        autoComplete="off"
                                        maxLength="19"
                                        className={`mt-2 form-control
                                        ${touched.cardNumber && errors.cardNumber ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="cardNumber"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label htmlFor="cardMonth">Expiration</label>
                                    <Field
                                        type="cardMonth"
                                        name="cardMonth"
                                        as="select"
                                        className={`mt-2 form-control
                                        ${touched.cardMonth && errors.cardMonth ? "is-invalid" : ""}`}
                                    >
                                        <option value="" disabled>Month</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) => (
                                            <option  key={"m"+m} value={m}>{m < 10 ? `0${m}` : m}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        component="div"
                                        name="cardMonth"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label htmlFor="cardYear"></label>
                                    <Field
                                        type="cardYear"
                                        name="cardYear"
                                        as="select"
                                        className={`mt-2 form-control
                                        ${touched.cardYear && errors.cardYear ? "is-invalid" : ""}`}
                                    >
                                        <option value="" disabled>Year</option>
                                        {[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032].map((y, i) => (
                                            <option key={"y"+y} value={y}>{y}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        component="div"
                                        name="cardYear"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label htmlFor="cvv">cvv</label>
                                    <Field
                                        type="cvv"
                                        name="cvv"
                                        placeholder=""
                                        autoComplete="off"
                                        value={
                                            values.cvv
                                            .replace(/[^\d]/g, "")}
                                        maxLength='3'
                                        className={`mt-2 form-control
                                        ${touched.cvv && errors.cvv ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="cvv"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    />
            
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                    disabled={!isValid}
                                >
                                    Donate
                                </button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
        </div>
    );  
}

export default DonationForm;