window.onload = function () {

    // Selecting the contest button
    let button = document.getElementById("contestButton");
    // Selecting the output area
    let output = document.getElementById("contestOutput");

    // adding a function to run on the button when it's clicked
    button.onclick = runContest;

    // creating a function to be ran on the event a button is clicked
    function runContest() {

        // Generate a random number from 1-100
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        // Check to see if there is innerText in the contest output 
        if (output.innerText == '') {
            // If the random number is 1000
            if (randomNumber == 1000) {
                // Output a Wining message to the output
                // NOTE : THIS IS IMPOSSIBLE AS THE RANDOM NUMBER WILL BE 1-100
                output.innerHTML = `You Drew Number: ${randomNumber}: You are a winner!`;
            } 
            else {
                // Output a losing message to the output
                output.innerHTML = `You Drew Number: ${randomNumber}. Sorry, you are not a winner!`;

                // Create a cookie to store the randomNumber that was drawn so that the user can not refresh the page to try again.
                createCookie('contestNumber', randomNumber, '604800');
            }
        }

    }

      // Creating a function to create a cookie by inputing 3 parameters
      function createCookie(cookieName, cookieValue, lifespan) {
        // Creating a cookie with the inputed parameters
        document.cookie = `${cookieName}=${cookieValue}; max-age=${lifespan}`;
    }

    // splitting the stored cookies into an array and saving it to a variable
    let cookieArray = document.cookie.split(";");

    // retrieving the "contestNumber" value from the cookie
    let contestNumber = cookieArray[0].split("=")[1];

    // Checking to see if there is a contestNumber stored in cookies
    if (contestNumber == undefined) {
        // If not, return null
        return null
    } else {
        // If there is, change the output to display the stored cookie.
        output.innerHTML = `You Drew Number: ${contestNumber}. Sorry, you are not a winner!`;
    }


}