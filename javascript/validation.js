
const letterPattern = /^[A-Za-z]+$/;

function validateForm(event) {
    event.preventDefault();
    
    let validFirstName = validateFirstName();
    let validLastName = validateLastName();
    let validFacilitator = validateFacilitator();

    if (!validFirstName || !validLastName || !validFacilitator) {
        return alert("Please correct form errors before submission.");
    }

    event.target.submit();

}

function validateFirstName() {
    let firstName = document.getElementById("firstName");

    if (firstName.value.length <= 2 || firstName.value == null || firstName.value == "") {
        document.getElementById("firstNamePrompt").innerHTML = ("<span style='color:red'> Invalid name! First name must contain two (2) or more characters.</span>");
        firstName.focus();
        return false;
    }

    if (!(firstName.value.match(letterPattern))) {
        document.getElementById("firstNamePrompt").innerHTML = ("<span style='color:red'> Invalid name! First name must contain only alphabetic characters.</span>")
        firstName.focus();
        return false;
    }
    
    return true;   

}

function validateLastName() {
    let lastName = document.getElementById("lastName");

    if (lastName.value.length <= 2 || lastName.value == null || lastName.value == "") {
        document.getElementById("lastNamePrompt").innerHTML = ("<span style='color:red'> Invalid name! Last name must contain two (2) or more characters.</span>");
        lastName.focus();
        return false;
    }

    if (!(lastName.value.match(letterPattern))) {
        document.getElementById("lastNamePrompt").innerHTML = ("<span style='color:red'> Invalid name! Last name must contain only alphabetic characters.</span>")
        lastName.focus();
        return false;
    }

    return true;
}

function validateFacilitator() {
    let facilitator = document.getElementById("facilitator")
    const facilitatorList = ["jen", "behdad", "chris", "christian", "josh"]
    
    if (!facilitatorList.includes(facilitator.value.toLowerCase())) {
        document.getElementById("facilitatorPrompt").innerHTML = ("<span style='color:red'> Invalid facilitator name! Please type a current facilitator name: Jen, Behdad, Chris, Christian, or Josh.</span>")
        facilitator.focus();
        return false;
    }

    return true;
}