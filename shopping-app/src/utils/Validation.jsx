export const Validation = (email,password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isEmailValid) return "Enter a Valid Email"
    if(!isPasswordValid) return "Password should contain character,number and special symbol"

    return null;
  
}


