export const validator = ({email,password})=>{
    const isEmailValid = emailValidate(email);
    const isPasswordValid = passwordValidate(password);
    return isEmailValid && isPasswordValid;
}



const passwordValidate=(password)=>{
    return password.length >= 6 && password.length < 12
}

const emailValidate = (email)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}