//Form object
var formInfo = {
	name: "",
	email: "",
	phone: "",
    attendees: 0,
    date: ""
};

window.onload = function() {
    let form = document.forms.form_event;

    var thankYou = document.getElementById("thanks_msg");

    form.onsubmit = processForm;

    function processForm() {

        // Selecting elements in the form
		let nameElement = form.name;
		let emailElement = form.email;
        let phoneElement = form.phone;
        let numberOfPeopleElement = form.numberOfPeople;
        let dateElement = form.dateOfEvent;

        // Retrieving the value of the elements of the form
		let nameValue = form.name.value;
		let emailValue = form.email.value;
        let phoneValue = form.phone.value;
        let peopleValue = form.numberOfPeople.value;
        let dateValue = form.dateOfEvent.value;

        formInfo.name = nameValue;
        formInfo.email = emailValue;
        formInfo.phone = phoneValue;
        formInfo.attendees = peopleValue;
        formInfo.date = dateValue;

        console.log(formInfo);

        // Check to see if a name has been inputed
		if(nameValue === "" || nameValue === null){ 
			nameElement.style.background = "red";
			nameElement.focus();
			return false;
        } 
        else {
            nameElement.style.background = "";
        }

        // Check to see if a the customer id has been inputed
        let myRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // BORROWED FROM ASIA :D
		if(!myRegEx.test(formInfo.email)){ 
			emailElement.style.background = "red";
			emailElement.focus();
			return false;
        } 
        else {
            emailElement.style.background = "";
        }

        // Check to see if the postal code has been inputed
		if(phoneValue === "" || phoneValue === null){ 
			phoneElement.style.background = "red";
			phoneElement.focus();
			return false;
        } 
        else {
            phoneElement.style.background = "";
        }
        
        // Check to see if the postal code has been inputed
		if(peopleValue === "" || peopleValue === null){ 
			numberOfPeopleElement.style.background = "red";
			numberOfPeopleElement.focus();
			return false;
        }
        else {
            numberOfPeopleElement.style.background = "";
        }
        
        // Check to see if the postal code has been inputed
		if(dateValue === "" || dateValue === null){ 
			dateElement.style.background = "red";
			dateElement.focus();
			return false;
        } 
        else {
            dateElement.style.background = "";
        }
    
        // If all the checks pass, hide the form
		form.style.display = "none";
		// and display the thank you message
		thankYou.style.display = "block";

        // Select elements from the thank you message and see their innerhtml to be equal to the values set in the shipinfo object
		var customerSpan = document.getElementById("thanksCustomer");
		customerSpan.innerHTML = `${formInfo.name}`;
        var peopleSpan = document.getElementById("peopleAmount");
        peopleSpan.innerHTML = `${formInfo.attendees}`;
        var dateSpan = document.getElementById("dateValue");
		dateSpan.innerHTML = `${formInfo.date}`;

        return false
    }


}