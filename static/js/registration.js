// $( "#password" ).focus(function() {
//         $(this).css("border-color", "#0080ff");
//
// });
// $( "#firstname" ).focus(function() {
//         $(this).css("border-color", "#0080ff");
//
// });
// $( "#lastname" ).focus(function() {
//         $(this).css("border-color", "#0080ff");
//
// });
// $( "#phoneno" ).focus(function() {
//         $(this).css("border-color", "#0080ff");
//
// });
// $( "#email" ).focus(function() {
//         $(this).css("border-color", "#0080ff");
//
// });
$("#username").focusout(function () {
    var value = $(this).val()
    if (checkusernamesignup(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
})
$("#password").focusout(function () {
    var value = $(this).val()
    if (checkpasswordsignup(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
})
$("#firstname").focusout(function () {
    var value = $(this).val()
    if (checkfirstnamesignup(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
})
$("#lastname").focusout(function () {
    var value = $(this).val()
    if (checklastnamesignup(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
})
$("#email").focusout(function () {
    var value = $(this).val()
    if (checkemailsignup(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
})
$("#usrname").focusout(function () {
    var value = $(this).val()
    if (checkusernamelogin(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
});
$("#psw").focusout(function () {
    var value = $(this).val()
    if (checkpasswordlogin(value) == 1) {
        // $(this).css("border-color", "#FF0000");
    } else {
        // $(this).css("border-color", "#00CD00");
    }
});

$("#confirmpassword").focusout(function () {
    var value = $(this).val()
    if (checkconfirmpasswordsignup(value) == 1) {
    } else {
    }
});


function checkpasswordlogin(value) {
    document.getElementById('passwordloginstatus').style.color = "red";
    if (value.length < 8 || value.length > 16) {
        document.getElementById('passwordloginstatus').innerHTML = 'X Password must be between 8 and 16 characters';
        return 1;
    } else if (value.indexOf(' ') >= 0) {
        document.getElementById('passwordloginstatus').innerHTML = 'X Password must not contain whitespaces';
        return 1
    }
    if (isValid(value) == false) {
        document.getElementById('passwordloginstatus').innerHTML = 'X Password must not contain only english letters and numbers';
        return 1
    }
    if (hasUnderscore(value) == 1) {
        document.getElementById('passwordloginstatus').innerHTML = 'X Password must not contain only english letters and numbers';
    }
    else {
        document.getElementById('passwordloginstatus').innerHTML = '';
        return 0;
    }
}

function checkpasswordsignup(value) {
    document.getElementById('passwordsignupstatus').style.color = "red";
    if (value.length < 8 || value.length > 16) {
        document.getElementById('passwordsignupstatus').innerHTML = 'X Password must be between 8 and 16 characters';
        return 1;
    }
    if (value.indexOf(' ') >= 0) {
        document.getElementById('passwordsignupstatus').innerHTML = 'X Password must not contain whitespaces';
        return 1
    }
    if (isValid(value) == false) {
        document.getElementById('passwordsignupstatus').innerHTML = 'X Password must not contain only english letters and numbers';
        return 1
    }
    if (hasUnderscore(value) == 1) {
        document.getElementById('passwordsignupstatus').innerHTML = 'X Password must not contain only english letters and numbers';
    }
    else {
        document.getElementById('passwordsignupstatus').innerHTML = '';
        return 0;
    }
}

function checkconfirmpasswordsignup(value) {
    var passwordvalue = $('#password').val();
    document.getElementById('confirmpasswordsignupstatus').style.color = "red";
    if (value.length < 8 || value.length > 16) {
        document.getElementById('confirmpasswordsignupstatus').innerHTML = 'X Password must be between 8 and 16 characters';
        return 1;
    }
    if (value.indexOf(' ') >= 0) {
        document.getElementById('confirmpasswordsignupstatus').innerHTML = 'X Password must not contain whitespaces';
        return 1
    }
    if (isValid(value) == false) {
        document.getElementById('confirmpasswordsignupstatus').innerHTML = 'X Password must not contain only english letters and numbers';
        return 1
    }
    if (hasUnderscore(value) == 1) {
        document.getElementById('confirmpasswordsignupstatus').innerHTML = 'X Password must not contain only english letters and numbers';
        return 1
    }if(value != passwordvalue){
        document.getElementById('confirmpasswordsignupstatus').innerHTML = "X The password doesn't match. Please try again" ;
        return 1
    }
    else {
        document.getElementById('confirmpasswordsignupstatus').innerHTML = '';
        return 0;
    }
}

function checkusernamesignup(value) {
    document.getElementById('usernamesignupstatus').style.color = "red";
    if (value.length < 1 || value.length > 16) {
        document.getElementById('usernamesignupstatus').innerHTML = 'X Username must be between 1 and 16 characters';
        return 1;
    }
    if (value.indexOf(' ') >= 0) {
        document.getElementById('usernamesignupstatus').innerHTML = 'X Username must not contain whitespaces';
        return 1
    }
    if (isValid(value) == false) {
        document.getElementById('usernamesignupstatus').innerHTML = 'X Username must not contain only english letters and numbers';
        return 1
    }
    if (hasUnderscore(value) == 1) {
        document.getElementById('usernamesignupstatus').innerHTML = 'X Username must not contain only english letters and numbers';
    }
    else {
        document.getElementById('usernamesignupstatus').innerHTML = '';
        return 0;
    }
}

function checkusernamelogin(value) {
    document.getElementById('usernameloginstatus').style.color = "red";
    if (value.length < 1) {
        document.getElementById('usernameloginstatus').innerHTML = 'X Please enter your username';
        return 1;
    }
    if (value.length < 1 || value.length > 16) {
        document.getElementById('usernameloginstatus').innerHTML = 'X Username must be between 1 and 16 characters';
        return 1;
    }
    if (value.indexOf(' ') >= 0) {
        document.getElementById('usernameloginstatus').innerHTML = 'X Username must not contain whitespaces';
        return 1
    }
    if (isValid(value) == false) {
        document.getElementById('usernameloginstatus').innerHTML = 'X Username must not contain only english letters and numbers';
        return 1
    }
    if (hasUnderscore(value) == 1) {
        document.getElementById('usernameloginstatus').innerHTML = 'X Username must not contain only english letters and numbers';
    }
    else {
        document.getElementById('usernameloginstatus').innerHTML = '';
        return 0;
    }
}

function checkfirstnamesignup(value) {
    document.getElementById('firstnamesignupstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('firstnamesignupstatus').innerHTML = 'X Please enter your name';
        return 1;
    }
    else if (hasNumber(value)) {
        document.getElementById('firstnamesignupstatus').innerHTML = 'X Name must not contain number';
        return 1
    } else {
        document.getElementById('firstnamesignupstatus').innerHTML = '';
        return 0;
    }
}

function checklastnamesignup(value) {
    document.getElementById('lastnamesignupstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('lastnamesignupstatus').innerHTML = 'X Please enter your name';
        return 1;
    }
    else if (hasNumber(value)) {
        document.getElementById('lastnamesignupstatus').innerHTML = 'X Name must not contain number';
        return 1
    } else {
        document.getElementById('lastnamesignupstatus').innerHTML = '';
        return 0;
    }
}

function checkemailsignup(value) {
    document.getElementById('emailsignupstatus').style.color = "red";
    if (hasAt(value) && hasDot(value)) {
        document.getElementById('emailsignupstatus').innerHTML = '';
        return 0
    } else {
        document.getElementById('emailsignupstatus').innerHTML = 'X Invalid email address';
        return 1;
    }
}

function hasNumber(myString) {
    return /\d+/.test(myString);
}

function hasAt(myString) {
    if ((myString.split("@").length - 1) > 1) {
        return false
    } //Check how many "@"
    var att = new RegExp("@");
    return att.test(myString);
}

function hasDot(myString) {
    return /\./.test(myString)

}

function hasAlphabet(myString) {
    return /[a-zA-Z]/.test(myString)
}

function hasUnderscore(myString) {
    // alert('emb');
    // console.log('embed');
    substring = "_";
    if (myString.includes(substring) == true) {
        return 1;
    } else {
        return 0;
    }

}

function checkall() {
    var firstnamevalue = $('#firstname').val();
    var lastnamevalue = $('#lastname').val();
    var passwordvalue = $('#password').val();
    var confirmpasswordvalue = $('#confirmpassword').val();
    var emailvalue = $('#email').val();
    var dateofbirthsignupvalue = $('[name=birthday]').val();

    if (checkfirstnamesignup(firstnamevalue) == 1 ||
        checklastnamesignup(lastnamevalue) == 1 ||
        checkpasswordsignup(passwordvalue) == 1 ||
        checkconfirmpasswordsignup(confirmpasswordvalue) == 1 ||
        checkemailsignup(emailvalue) == 1 ||
        checkDateOfBirthSignUp(dateofbirthsignupvalue) == 1) {
        alert("Please enter all of the field correctly");
        return false;
    }
}

function isValid(str) {
    return /^\w+$/.test(str);
}


function checklogin() {
    var usernamevalue = $('#usrname').val();
    var passwordvalue = $('#psw').val();

    if (checkusernamelogin(usernamevalue) == 1 ||
        checkpasswordlogin(passwordvalue) == 1) {
        alert("Please enter all of the field correctly");
        return false;
    }
}


function checkDateOfBirthSignUp(date1) {
    // console.log('enter checkdateofbirth ')
    // alert('asdf');
    document.getElementById('dateofbirthsignupstatus').style.color = "red";
    var today = new Date();
    today2 = today;
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    // hundredyrsago = yyyy-100;
    var hundredyrsago = today.getFullYear() - 100;
    today = dd + '-' + mm + '-' + yyyy;
    // hundredyrsagodate = mm + '/' + dd + '/' + hundredyrsago;
    var inputdate = date1.split("-");
    var inputdate2 = new Date(inputdate[2], inputdate[1] - 1, inputdate[0]);

    var day, year;
    if (date1.length <= 1) {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X Please enter the date of birth";
        return 1;
    }
    if (date1.length !== 10) {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X Please enter the date of birth correctly";
        return 1;
    }
    if (date1.substring(2, 3) !== '-' || date1.substring(5, 6) !== '-') {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X Please enter the date of birth correctly";
        return 1;
    }
    day = date1.substring(0, 2) - 1; // because months in JS start from 0
    month = date1.substring(3, 5) - 0;
    year = date1.substring(6, 10) - 0;
    if (year < 1000 || year > 3000) {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X Please enter the date of birth correctly";
        return 1;
    }


    if (inputdate2 == today2) {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X You can't be born today right!?";
        return 1;
    }
    if (inputdate2 >= today2) {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "X You are not coming from the future right!?";
        return 1;
    }


    else {
        document.getElementById('dateofbirthsignupstatus').innerHTML = "";
        return 0;

    }

}

$("#datepicker").focusout(function () {
    // alert('kao leaw')
    var date1 = $('[name=birthday]').val();
    if (checkDateOfBirthSignUp(date1) == 1) {
    } else {
        // $('#datepicker').css("border-color", "#00CD00");
    }
});
