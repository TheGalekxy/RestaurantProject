

function initAll(){

    
    var formHandle = document.forms.careersform;
    //console.log(formHandle);
    formHandle.onsubmit = processCareerForm;//ON SUBMIT LISTENER CALLS FUNCTION PROCESSFORM 
    
    function processCareerForm(){
       //RESUME ATTACHMENT
      
       var ResumeAttach = document.getElementById("myFile");// 
       console.log(ResumeAttach);

       if(ResumeAttach.value === "" || ResumeAttach.value === null){ 
               ResumeMsg = document.getElementById("resume_msg");
               ResumeMsg.style.background = "#611a02";
               ResumeMsg.innerHTML = "Please attach your resume"; 
               ResumeMsg.style.color = "white";
               ResumeAttach.focus(); 
               return false;
           }
    
        //FROM NAME VALIDATION
        var FromFirstNameVal = document.getElementById("FromFirstName");// F NAME
        var FromLastNameVal = document.getElementById("FromLastName");// L NAME
     
        console.log(FromFirstNameVal);
        console.log(FromFirstNameVal.value);
        console.log(FromLastNameVal);
        console.log(FromLastNameVal.value);
        
        if(FromFirstNameVal.value === "" || FromFirstNameVal.value === null ||FromLastNameVal.value === "" || FromLastNameVal.value === null ){ 
                nameMsgFrom = document.getElementById("nameFrom");
                nameMsgFrom.style.background = "#611a02";
                nameMsgFrom.innerHTML = "Your First and Last Name Are Required"; 
                nameMsgFrom.style.color = "white";
                FromFirstNameVal.focus(); 
                return false;
            }
      //EMAIL VALIDATION 
        var outPut = document.getElementById("email_msg");//span
        var emailinput = document.getElementById("email"); //emailTo
        var valueToCompareEmail = emailinput.value;
        console.log(valueToCompareEmail);
        var myRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
            if(!myRegEx.test(valueToCompareEmail) ){
            outPut.innerHTML = "Enter Your Valid E-mail";
            outPut.style.background = "#611a02";
            outPut.style.color = "white";
            return false;
            }
        //PHONE NUMBER VALIDATION
        ///^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        var phone_msg=document.getElementById("phone");//phoneMsg
        var phoneinput=document.getElementById("phonenumber");//PhoneVal
        var ValComparePhone = phoneinput.value;
        console.log(ValComparePhone);
        var phoneRegEx= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if(!phoneRegEx.test(ValComparePhone) ){
                phone_msg.innerHTML = "Enter Your Valid PhoneNumber";
                phone_msg.style.background = "#611a02";
                phone_msg.style.color = "white";
                return false;
                }
           
 //Better suited for a loop but I don't know how

 var MorChecked1= document.getElementById("checkboxBtnMor1").checked;
 var MorChecked2= document.getElementById("checkboxBtnMor2").checked;
 var MorChecked3= document.getElementById("checkboxBtnMor3").checked;
 var MorChecked4= document.getElementById("checkboxBtnMor4").checked;
 var MorChecked5= document.getElementById("checkboxBtnMor5").checked;
 var MorChecked6= document.getElementById("checkboxBtnMor6").checked;
 var MorChecked7= document.getElementById("checkboxBtnMor7").checked;

 var AftChecked1= document.getElementById("checkboxBtnAft1").checked;
 var AftChecked2= document.getElementById("checkboxBtnAft2").checked;
 var AftChecked3= document.getElementById("checkboxBtnAft3").checked;
 var AftChecked4= document.getElementById("checkboxBtnAft4").checked;
 var AftChecked5= document.getElementById("checkboxBtnAft5").checked;
 var AftChecked6= document.getElementById("checkboxBtnAft6").checked;
 var AftChecked7= document.getElementById("checkboxBtnAft7").checked;

 var EveChecked1= document.getElementById("checkboxBtnEve1").checked;
 var EveChecked2= document.getElementById("checkboxBtnEve2").checked;
 var EveChecked3= document.getElementById("checkboxBtnEve3").checked;
 var EveChecked4= document.getElementById("checkboxBtnEve4").checked;
 var EveChecked5= document.getElementById("checkboxBtnEve5").checked;
 var EveChecked6= document.getElementById("checkboxBtnEve6").checked;
 var EveChecked7= document.getElementById("checkboxBtnEve7").checked;

 
 if(MorChecked1 === false & 
    MorChecked2 === false & 
    MorChecked3 === false & 
    MorChecked4 === false & 
    MorChecked5 === false & 
    MorChecked6 === false & 
    MorChecked7 === false &
    AftChecked1 === false & 
    AftChecked2 === false & 
    AftChecked3 === false & 
    AftChecked4 === false & 
    AftChecked5 === false & 
    AftChecked6 === false & 
    AftChecked7 === false &
    EveChecked1 === false &
    EveChecked2 === false &
    EveChecked3 === false &
    EveChecked4 === false &
    EveChecked5 === false &
    EveChecked6 === false &
    EveChecked7 === false ){

        AvailMsg= document.getElementById("Availability_Span");
        AvailMsg.innerHTML = "Enter Your Availability";
        AvailMsg.style.background = "#611a02";
        AvailMsg.style.color = "white";
        return false;
 }
       
    }
    
    }  
    window.onload = initAll;
    
    