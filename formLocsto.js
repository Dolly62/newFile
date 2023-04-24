function test() {
    const currentName = document.getElementById('username').value;
    const currentEmail = document.getElementById('e-mail').value;
    const currentPhoneNumber = document.getElementById('phone-number').value;

    //store the user data
    const userInput = localStorage.setItem('currentName', currentName);
    const userEmail = localStorage.setItem('currentEmail', currentEmail);
    const userPhoneNumber = localStorage.setItem('currentPhoneNumber', currentPhoneNumber);

}




