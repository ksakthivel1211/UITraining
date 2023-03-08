// start :: input variables
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const pincode = document.querySelector("#pincode");
const cardNumber = document.querySelector("#card-number");
const expiryYear = document.querySelector("#card-expiry-year");
const cvv = document.querySelector("#cvv");
const formValues =[firstName,lastName,email,contact,pincode,cardNumber,expiryYear,cvv];
// End :: input variables

// Sttart :: regex
const regFirstName = /^[a-zA-Z]{1,30}$/;
const regLastName = /^[a-zA-Z]{1,30}$/;
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regContactNumber = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
const regPincode = /^[1-9]{1}[0-9]{2}\s?[0-9]{3}$/;
const regCardNumber = /^4[0-9]{12}(?:[0-9]{3})?$/;
const regCardExpiry = /^(202[3-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})$/;
const regCVV = /^[0-9]{3,4}$/;
const regValues =[regFirstName,regLastName,regMail,regContactNumber.regPincode,regCardNumber,regCardExpiry,regCVV];
// End :: regex

// Start :: Mapping of regex to the input values
regExObjects = {};
formValues.forEach((element, index)=> {
    regExObjects[element.getAttribute("id")] = regValues[index];
});
// End :: Mapping

// Start :: Validation Function
function validate(component) {

    if (component.value=="") {
        component.setAttribute("class", component.getAttribute("class")+" error-input");
        const componentID = component.getAttribute("id");
        document.querySelector("#"+componentID+"+"+".form-label-error").innerHTML = component.name+" is required";
    }

    else{

        if(regExObjects[component.getAttribute("id")].test(component.value)){
            component.setAttribute("class", "form-input");
            const componentID = component.getAttribute("id");
            document.querySelector("#"+componentID+"+"+".form-label-error").innerHTML = "";
        }
        else{
            component.setAttribute("class", component.getAttribute("class")+" error-input");
            const componentID = component.getAttribute("id");
            document.querySelector("#"+componentID+"+"+".form-label-error").innerHTML = component.name+" is not valid";
        }
    }
}
// End :: Validation function

// Start :: submit event
document.querySelector("#submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    formValues.forEach(validate); 
});
// End :: submit event
