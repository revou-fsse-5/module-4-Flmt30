import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import AddressInformation from './AddressInformation';
import AccountInformation from './AccountInformation';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        dateOfBirth: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        username: '',
        password: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <PersonalInformation nextStep={nextStep} formData={formData} setFormData={setFormData} />;
        case 2:
            return <AddressInformation nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
        case 3:
            return <AccountInformation prevStep={prevStep} formData={formData} setFormData={setFormData} />;
        default:
            return <div>Form completed</div>;
    }
};

export default MultiStepForm;