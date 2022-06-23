import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import '../App.css';

const DonationGiftForm = (props) => {
    const getSchema = () =>
        yup.object().shape({
            nameOrCompany: yup.string().required('Required'),
            streetAddress: yup.string().required('Required'),
            zip: yup.string().required('Required'),
            city: yup.string().required('Required'),
            stateOrProvince: yup.string().required('Required'),
            country: yup.string().required('Required')
        });

    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <Formik 
                    initialValues={{
                        nameOrCompany: '',
                        streetAddress:'',
                        zip:'',
                        city:'',
                        stateOrProvince:'',
                        country:''
                    }}
                    validationSchema={getSchema()}
                    onSubmit={(values) => {
                        {/* Calls to APIs should go here */}
                        console.log('Sending shipping details to vendor')
                        values.email = props.email;
                        values.donationAmount = props.donationAmount;

                        console.log('Sending to Vendor API')
                        console.log(values)

                        console.log('Sending to Donation tracker')
                        console.log(values)

                        props.advanceProcess('finished');
                    }}
                >
                {({touched, errors, isSubmitting, values }) => 
                    (
                        <Form>
                            <div className="row">
                                <h2>Gift Reception Form</h2>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="nameOrCompany">Name or Company</label>
                                    <Field
                                        type="nameOrCompany"
                                        name="nameOrCompany"
                                        placeholder="Enter your name or company"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.nameOrCompany && errors.nameOrCompany ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="nameOrCompany"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="streetAddress">Street Address</label>
                                    <Field
                                        type="streetAddress"
                                        name="streetAddress"
                                        placeholder="Enter your address"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.streetAddress && errors.streetAddress ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="streetAddress"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="city">City</label>
                                    <Field
                                        type="city"
                                        name="city"
                                        placeholder="Enter your city"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.city && errors.city ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="city"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="zip">Zip Code</label>
                                    <Field
                                        type="zip"
                                        name="zip"
                                        placeholder="Enter your zip code"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.zip && errors.zip ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="zip"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="stateOrProvince">State or Province</label>
                                    <Field
                                        type="stateOrProvince"
                                        name="stateOrProvince"
                                        placeholder="Enter your state or province"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.stateOrProvince && errors.stateOrProvince ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="stateOrProvince"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="country">Country</label>
                                    <Field
                                        type="country"
                                        name="country"
                                        placeholder="Enter your country"
                                        autoComplete="off"
                                        className={`mt-2 form-control
                                        ${touched.country && errors.country ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="country"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                >
                                    Submit
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

export default DonationGiftForm;