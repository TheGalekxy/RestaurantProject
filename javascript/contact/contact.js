//Javascript file for the  //


window.onload = function(){
    
    var formHandle = document.forms.formContact;
    
    var in_Name = document.getElementById("in_Name");//formHandle.in_Name;
    var in_Email = document.getElementById("in_Email");//formHandle.in_Email;
    var in_Tel = document.getElementById("in_Tel");//formHandle.in_Tel;
    var in_Msg = document.getElementById("in_Msg");//formHandle.in_Msg;
    
    document.getElementById("thanks_msg").style.display = "none";
    
    formHandle.onsubmit = processForm;
    
    function processForm(){
        
        var userName = in_Name.value;
        var userEmail = in_Email.value;
        var userTel = in_Tel.value;
        var userMsg = in_Msg.value;
        
        var NameError = document.getElementById("NameError");
        var EmailError = document.getElementById("EmailError");
        var TelError = document.getElementById("TelError");
        var MsgError = document.getElementById("MsgError");
        
        var backErrorColor = "#F05D23";
        
        console.log(userName);
        
        var validEntries = [];
        const totalEntries = 4;
        
        //initializaion of the array.
        for (var i=0; i<totalEntries; i++) {
            validEntries[i]=false;
        }
        
        //******************************************************//
        //Displays error message, and turns the empty box orange//
        {
            
            //Name validity
            if(userName === "" || userName === null){ 
                in_Name.style.background = backErrorColor;
                in_Name.focus(); 
                NameError.innerHTML = "Enter your name.";
            }
            else {
                in_Name.style.background = "#fff"; //refresh the previous/
                NameError.innerHTML = "";
                validEntries[0] = true;
            }
            
            //Email address validity
            if(userEmail === "" || userEmail === null){ 
                in_Email.style.background = backErrorColor;
                in_Email.focus(); 
                EmailError.innerHTML = "Enter your Email address.";
            }
            else if (userEmail.search("@")===-1) {
                in_Email.style.background = backErrorColor;
                in_Email.focus(); 
                EmailError.innerHTML = "Invalid Email address.";
            }
            else {
                in_Email.style.background = "#fff"; //refresh the previous/
                EmailError.innerHTML = "";
                validEntries[1] = true;
            }
            
            //Telephone validity
            if(userTel === "" || userTel === null){ 
                in_Tel.style.background = backErrorColor;
                in_Tel.focus();
                TelError.innerHTML = "Enter your telephone.";
            }
            else {
                in_Tel.style.background = "#fff"; //refresh the previous/
                TelError.innerHTML = "";
                validEntries[2] = true;
            }
            
            //Message  validity
            if(userMsg === "" || userMsg === null){ 
                in_Msg.style.background = backErrorColor;
                in_Msg.focus(); 
                MsgError.innerHTML = "Enter a message.";
            }
            else {
                in_Msg.style.background = "#fff";
                MsgError.innerHTML = "";
                validEntries[3] = true;
            }
            
            //validating whether all the four entries have been correctly input or not.
            for (var i=0; i<totalEntries; i++) {
                //if any one of the entries is incorrect then exit, without displaying
                //the thank you message
                if (validEntries[i]===false) {
                    return false;
                }
            }
            
        }
            
        
        document.getElementById("thanks_msg").innerHTML="Thank you " + userName + ". We will get back to you soon.";
        document.getElementById("thanks_msg").style.display = "block";
        
        document.getElementById("activeform").style.display = "none";
        
        return false;
        
    }
    
    
    
}