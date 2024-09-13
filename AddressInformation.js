import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addressInformationSchema } from './validationSchema';

const AddressInformation = ({ nextStep, prevStep, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={addressInformationSchema}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                nextStep();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
                        <Field
                            type="text"
                            name="streetAddress"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                        <Field
                            type="text"
                            name="city"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
                        <Field
                            type="text"
                            name="state"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
                        <Field
                            type="text"
                            name="zipCode"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="zipCode" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            disabled={isSubmitting}
                        >
                            Next
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddressInformation;
