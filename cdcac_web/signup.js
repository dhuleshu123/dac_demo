function validate() {

    var correct_way = / ^ [ A-Z a-z ] + $/;
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var email = document.getElementById("email");
    var username = document.getElementById("user");
    var password = document.getElementById("pass");


    if (firstname.value.trim() == "") {
        //  alert("NO BALANK SPACE ALLOWED");
        firstname.style.border = "solid 3px red";
        document.getElementById("fuser").style.visibility = "visible";
        return false;
    }

    if (lastname.value.trim() == "") {
        //  alert("NO BALANK SPACE ALLOWED");
        lastname.style.border = "solid 3px red";
        document.getElementById("luser").style.visibility = "visible";
        return false;
    }

    if (username.value.length < 3) {
        //  alert("NO BALANK SPACE ALLOWED");
        username.style.border = "solid 3px red";
        document.getElementById("userid").style.visibility = "visible";
        return false;
    }

    if (username.value.length > 20) {
        //  alert("NO BALANK SPACE ALLOWED");
        username.style.border = "solid 3px red";
        document.getElementById("userid").style.visibility = "visible";
        return false;
    }


    if (password.value.trim().length < 5) {
        // alert("password to short");
        password.style.border = "solid 3px red";
        document.getElementById("pass").style.visibility = "visible";
        return false;
    }


    if (password.value.trim().length > 12) {
        // alert("password to short");
        password.style.border = "solid 3px red";
        document.getElementById("pass").style.visibility = "visible";
        return false;
    }

    if (username.value == correct_way) {

        return true;
    }
    else {
        //  alert("NO BALANK SPACE ALLOWED");
        username.style.border = "solid 3px red";
        document.getElementById("userid").style.visibility = "visible";
        return false;
    }





}