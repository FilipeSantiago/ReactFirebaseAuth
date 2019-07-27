import { useState } from 'react';

const useForm = (initialValues, callback) => {

    const [values, setValues] = useState(initialValues);

    const handleSubmit = (event) => {
    if (event) event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        console.log("error = " [event.target.name])
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };
    
    const handleCheckedChange = (event) => {
        let name = event.target.name
        let status = event.target.checked
        setValues(values => ({ ...values, [name]: status }));
    };

    return {
        values,
        handleChange,
        handleCheckedChange,
        handleSubmit
    };
};

export default useForm;