export default function validateLogin(values) {
    let errors = {};
    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.pwd) {
        errors.pwd = "Password is required ";
    }

    return errors;
}