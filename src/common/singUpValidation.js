export default function singUpValidation(values) {
    let errors = {};
    if (!values.name) {
        errors.name = "name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
        errors.name = "Name only letters and spaces allowed";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.date) {
        errors.date = "Dob is required";
    }
    // else if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(values.dob)) {
    //     errors.date = "Dob format DD/MM/YY";
    // }
    if (!values.mobile) {
        errors.mobile = "Mobile is required";
    } else if (!/^[0-9\b]+$/.test(values.mobile)) {
        errors.mobile = "Mobile needs to be  10 ";
    }
    if (!values.pwd) {
        errors.pwd = "Password is required";
    } else if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.pwd)) {
        errors.pwd = "Password needs pattern";
    }
    return errors;
}