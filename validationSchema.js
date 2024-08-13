import * as Yup from 'yup';

export const personalInformationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    dateOfBirth: Yup.date()
        .required('Date of Birth is required')
        .nullable(),
});

export const addressInformationSchema = Yup.object().shape({
    streetAddress: Yup.string()
        .required('Street Address is required'),
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    zipCode: Yup.string()
        .required('Zip Code is required')
        .matches(/^[0-9]{5}$/, 'Invalid Zip Code format'),
});

export const accountInformationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});