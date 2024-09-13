import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { accountInformationSchema } from './validationSchema';

const AccountInformation = ({ prevStep, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={accountInformationSchema}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                alert('Form submitted!');
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <Field
                            type="text"
                            name="username"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <Field
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
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
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AccountInformation;