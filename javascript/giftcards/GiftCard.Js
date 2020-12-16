function initAll(){

//     //This variable hold the display area
//     var dataDisplay = document.getElementById("displayform");
//     //On clicking radial buttons calls getTextFile# function
//     document.getElementById("GiftCardRadio").onclick = getGiftCard;
//     document.getElementById("EGiftCardRadio").onclick = getGiftCardOnline;
   

// //FUNCTION FOR TEXT FILE 1
//     function getGiftCard(){//Retrieve the getTextFile1.
//             var xhr = new XMLHttpRequest();
//         //function that listens for ready state changes
//             xhr.onreadystatechange = function(){
//                 if (xhr.readyState === 4 ) {
//                     if (xhr.status === 200) {
//                         dataDisplay.innerHTML = xhr.responseText; 
//                     } else {
//                         alert("No Bueno Connection");
//                     }
//                 }
//             }
//             xhr.open("GET","giftcard.txt",true);
//             xhr.send(null);
//     }//end getTextFile1

// //FUNCTION FOR TEXT FILE 2
//     function getGiftCardOnline(){//Retrieve the getTextFile2.
//         var xhr = new XMLHttpRequest();
//     //function that listens for ready state changes
//         xhr.onreadystatechange = function(){
//             if (xhr.readyState === 4 ) {
//                 if (xhr.status === 200) {
//                     dataDisplay.innerHTML = xhr.responseText; 
//                 } else {
//                     alert("No Bueno Connection");
//                 }
//             }
//         }
//         xhr.open("GET","giftcardOnline.txt",true);
//         xhr.send(null);
//     }//end getTextFile2
 

// // Form Handles that references the id of the form
var formHandle = document.forms.myFormSpot;
//console.log(formHandle);
formHandle.onsubmit = processForm;//ON SUBMIT LISTENER CALLS FUNCTION PROCESSFORM 

function processForm(){
    //TO NAME VALIDATION
    var ToFirstNameVal = document.getElementById("ToFirstName");// TO: F NAME
    var ToLastNameVal = document.getElementById("ToLastName");// TO: L NAME
 
    console.log(ToFirstNameVal);
    console.log(ToFirstNameVal.value);
    console.log(ToLastNameVal);
    console.log(ToLastNameVal.value);
    
    if(ToFirstNameVal.value === "" || ToFirstNameVal.value === null ||ToLastNameVal.value === "" || ToLastNameVal.value === null ){ 
        	nameMsgTo = document.getElementById("nameTo");
        	nameMsgTo.style.background = "#611a02";
        	nameMsgTo.innerHTML = "Recipient's First and Last Name Required"; 
        	nameMsgTo.style.color = "white";
        	ToFirstNameVal.focus(); 
        	return false;
        }
 

    //FROM NAME VALIDATION
    var FromFirstNameVal = document.getElementById("FromFirstName");// TO: F NAME
    var FromLastNameVal = document.getElementById("FromLastName");// TO: L NAME
 
    console.log(FromFirstNameVal);
    console.log(FromFirstNameVal.value);
    console.log(FromLastNameVal);
    console.log(FromLastNameVal.value);
    
    if(FromFirstNameVal.value === "" || FromFirstNameVal.value === null ||FromLastNameVal.value === "" || FromLastNameVal.value === null ){ 
        	nameMsgFrom = document.getElementById("nameFrom");
        	nameMsgFrom.style.background = "#611a02";
        	nameMsgFrom.innerHTML = "Your First and Last Name Required"; 
        	nameMsgFrom.style.color = "white";
        	FromFirstNameVal.focus(); 
        	return false;
        }
  //EMAIL VALIDATION (FROM)
    var outPut2 = document.getElementById("email_msg_from");//span
    var emailFrom = document.getElementById("email"); //emailTo
    var valueToCompareEmail = emailFrom.value;
    console.log(valueToCompareEmail);
    var myRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
        if(!myRegEx.test(valueToCompareEmail) ){
        outPut2.innerHTML = "Enter Your Valid E-mail";
        outPut2.style.background = "#611a02";
        outPut2.style.color = "white";
        return false;
        }
     
    //EMAIL TO VALIDATION
    
    var outPut1 = document.getElementById("email_msg_to");//span
    var emailTo = document.getElementById("emailTO"); //emailTo
    var valueToCompare = emailTo.value;
    console.log(valueToCompare);
    var myRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
        if(!myRegEx.test(valueToCompare) ){
        outPut1.innerHTML = "Enter Recipient's Valid E-mail";
        outPut1.style.background = "#611a02";
        outPut1.style.color = "white";
        return false;
    }
    


}


}  
window.onload = initAll;

