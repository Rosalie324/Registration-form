const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}
// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();
    // Retrieving input elements
    const fullnameInput = document.getElementById("First name");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date of birth");
    const addressInput = document.getElementById("Enter your address");
    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const address = addressInputInput.value;
    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //phone number
    function myfun() {
        vara = document.getElementById("phoneNumber").value;
        if(a=="") {
            document.getElementById("messages").innerHTML="** Please fill Mobile Number" ;
            return false;
        }
        if(isNaN(a)) {
            document.getElementById("messages").innerHTML="** Only Numbers";
            return false;
        }
        if(a.length<10){
            document.getElementById("messages").innerHTML="** Must be 10 digits";
            return false;
        }
        if(a.length>10){
            document.getElementById("messages").innerHTML="** Must be 10 digits";
            return false;
        }
        if(a.charAt(0)!=9) && (a.charAt(0)!=8) && (a.charAt(0)!=7) {
            document.getElementById("messages").innerHTML="** Must strat with 9,1,8,7 ";
            return false;

        }
    }
    }
   
    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your First name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }
    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;
    // Submitting the form
    form.Register();
}
// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== pas