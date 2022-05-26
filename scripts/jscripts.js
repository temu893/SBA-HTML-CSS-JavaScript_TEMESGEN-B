



function validateForm() {
    var vDocElement;
    var validF = "true";
    vDocElement = document.getElementById("fname").value;

    if (vDocElement == "") {
        document.getElementById("msgName").innerHTML = "Please enter your name";
        validF = "false";
    } else {
        document.getElementById("msgName").innerHTML = "";
    }



    vDocElement = document.getElementById("femail").value;
    if (vDocElement == "") {
        document.getElementById("msgEmail").innerHTML = "Please enter a valid email address";
        validF = "false";
    } else {
        document.getElementById("msgEmail").innerHTML = "";
    }

    vDocElement = document.getElementById("fsubject").value;
    if (vDocElement == "") {
        document.getElementById("msgSubject").innerHTML = "Please enter your subject";
        validF = "false";
    } else {
        document.getElementById("msgSubject").innerHTML = "";
    }

    vDocElement = document.getElementById("fmessage").value;
    if (vDocElement == "") {
        document.getElementById("msgMessage").innerHTML = "Please enter a message";
        validF = "false";
    } else {
        document.getElementById("msgMessage").innerHTML = "";
    }

    if (validF == "true") {
        //success.innerText = "Your message was succesfully sent, thank you"
       // alert("");
        if(!alert('Your message was succesfully sent, thank you')){window.location.reload();}


        return true;
    } else {
        return false;
    }
}
function clearContactForm(){

}

function validateFormReservation() {
    var vDocElement;
    var validF = "true";
    var vName = "";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    vDocElement = document.getElementById("fname").value;
    vName = vDocElement;
    if (vDocElement == "") {
        document.getElementById("msgName").innerHTML = "Please enter your name";
        validF = "false";
    } else {
        document.getElementById("msgName").innerHTML = "";
    }

    vDocElement = document.getElementById("fphone").value;
    if (vDocElement == "") {
        document.getElementById("msgPhone").innerHTML = "Please enter your phone";
        validF = "false";
    } else {
        document.getElementById("msgPhone").innerHTML = "";
    }

    vDocElement = document.getElementById("femail").value;
    if (vDocElement == "") {
        document.getElementById("msgEmail").innerHTML = "Please enter a valid email address";
        validF = "false";
    } else {
        if (!vDocElement.match(mailformat)) {
            document.getElementById("msgEmail").innerHTML = "Please enter a valid email address format";
            validF = "false";
        } else {
            document.getElementById("msgEmail").innerHTML = "";
        }
    }



    vDocElement = document.getElementById("fproject").value;
    if (vDocElement == "0") {
        document.getElementById("msgPeople").innerHTML = "Please select the type of Your Project";
        validF = "false";
    } else {
        document.getElementById("msgPeople").innerHTML = "";
    }

    vDocElement = document.getElementById("fdate").value;
    if (vDocElement == "") {
        document.getElementById("msgDate").innerHTML = "Please select date";
        validF = "false";
    } else {
        document.getElementById("msgDate").innerHTML = "";
    }

    vDocElement = document.getElementById("ftime").value;
    if (vDocElement == "0") {
        document.getElementById("msgTime").innerHTML = "Please select time";
        validF = "false";
    } else {
        document.getElementById("msgTime").innerHTML = "";
    }

    if (validF == "true") {
        //success.innerText = " your Reservation was succesfully made, thank you"
        if(!alert(vName + " your Reservation was succesfully made, thank you")){window.location.reload();}

        //alert(vName + " your Reservation was succesfully made, thank you");
        return true;
    } else {
        return false;
    }
}
