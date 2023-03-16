var password = "wearetheadminslol!@#$%^&*()"
function passcheck() {
    if (document.getElementById('pass1').value != password){
        alert("Wrong Password. Try again. Tresspassers, beware! We are tracking you.");
        return false;
    }
    if (document.getElementById('pass1').value == password){
        alert("Correct password. Click SUBMIT to continue.");
    }
}