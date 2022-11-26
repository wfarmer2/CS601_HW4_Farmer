function validateForm() {
    return (validateFirstName() && validateLastName() && validateFacilitator());
}

function validateFirstName() {
    let firstName = document.getElementById("firstName");

    if (firstName.value.length <= 2) {
        alert("Invalid name! First name must contain two (2) or more characters.");
        firstName.focus();
        return false;
    }
    
    return true;   

}

function validateLastName() {
    let lastName = document.getElementById("lastName");

    if (lastName.value.length <= 2) {
        alert("Invalid name! Last name must contain two (2) or more characters.");
        lastName.focus();
        return false;
    }

    return true;
}

function validateFacilitator() {
    let facilitator = document.getElementById("facilitator")
    const facilitatorList = ["JEN", "BEHDAD", "CHRIS", "CHRISTIAN", "JOSH"]

    facilitator = facilitator.value.toUpperCase();
    
    if (!facilitatorList.includes(facilitator)) {
        alert("Invalid facilitator name! Please type a current facilitator name.")
        facilitator.focus();
        return false;
    }

    return true;
}