const form = document.getElementById("registrationForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const gender = document.getElementsByName("gender");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const pincode = document.getElementById("pincode");
const username = document.getElementById("username");
const course = document.getElementById("course");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

form.addEventListener("submit", function(event){

    event.preventDefault();

    clearErrors();

    let isValid = true;

    // Full Name
    if(fullname.value.trim() === ""){
        showError(fullname,"Full Name is required");
        isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        showError(email,"Email is required");
        isValid = false;
    }
    else if(!emailPattern.test(email.value)){
        showError(email,"Enter a valid email");
        isValid = false;
    }

    // Phone
    const phonePattern = /^[0-9]{10}$/;

    if(phone.value.trim() === ""){
        showError(phone,"Phone Number is required");
        isValid = false;
    }
    else if(!phonePattern.test(phone.value)){
        showError(phone,"Enter a valid 10-digit phone number");
        isValid = false;
    }

    // Date of Birth
    if(dob.value === ""){
        showError(dob,"Date of Birth is required");
        isValid = false;
    }
    else{

        const birthDate = new Date(dob.value);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDifference = today.getMonth() - birthDate.getMonth();

        if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
            age--;
        }

        if(age < 18){
            showError(dob,"Age must be at least 18");
            isValid = false;
        }

    }

    // Gender
    let genderSelected = false;

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderSelected = true;
            break;
        }
    }

    if(!genderSelected){
        alert("Please select your gender");
        isValid = false;
    }

    // Address
    if(address.value.trim() === ""){
        showError(address,"Address is required");
        isValid = false;
    }

    // City
    if(city.value.trim() === ""){
        showError(city,"City is required");
        isValid = false;
    }

    // State
    if(state.value.trim() === ""){
        showError(state,"State is required");
        isValid = false;
    }

    // Country
    if(country.value.trim() === ""){
        showError(country,"Country is required");
        isValid = false;
    }

    // PIN Code
    const pinPattern = /^[0-9]{6}$/;

    if(pincode.value.trim() === ""){
        showError(pincode,"PIN Code is required");
        isValid = false;
    }
    else if(!pinPattern.test(pincode.value)){
        showError(pincode,"PIN Code must contain 6 digits");
        isValid = false;
    }

    // Username
    if(username.value.trim() === ""){
        showError(username,"Username is required");
        isValid = false;
    }

    // Course
    if(course.value === ""){
        showError(course,"Please select a course");
        isValid = false;
    }

    // Password
    if(password.value === ""){
        showError(password,"Password is required");
        isValid = false;
    }
    else if(password.value.length < 8){
        showError(password,"Password must contain at least 8 characters");
        isValid = false;
    }

    // Confirm Password
    if(confirmPassword.value === ""){
        showError(confirmPassword,"Confirm your password");
        isValid = false;
    }
    else if(password.value !== confirmPassword.value){
        showError(confirmPassword,"Passwords do not match");
        isValid = false;
    }

    // Terms
    if(!terms.checked){
        alert("Please accept the Terms & Conditions");
        isValid = false;
    }

    if(isValid){
        alert("Registration Successful!");
        form.reset();
    }

});

function showError(input,message){

    const error = input.parentElement.querySelector(".error");
    error.innerText = message;

}

function clearErrors(){

    document.querySelectorAll(".error").forEach(function(error){
        error.innerText = "";
    });
}