import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { personalInformationSchema } from './validationSchema';

const PersonalInformation = ({ nextStep, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={personalInformationSchema}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                nextStep();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <Field
                            type="text"
                            name="fullName"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <Field
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                        <Field
                            type="date"
                            name="dateOfBirth"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        disabled={isSubmitting}
                    >
                        Next
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default PersonalInformation;
