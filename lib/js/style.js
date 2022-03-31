$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});


$(document).ready(function() {
    $(".menu-item").click(function() {
        $(this).toggleClass("show");
    });
    $(".toggle-menu").click(function() {
        $(this).addClass("show");
        $('.mobile-menu').addClass('show');
    });
    $(".close").click(function() {
        $('.toggle-menu').removeClass("show");
        $('.mobile-menu').removeClass('show');
    });

    $('.banner-main').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        slideSpeed: 300,
        paginationSpeed: 400,
    })
    $('.slide-ourhotel').owlCarousel({
        loop: true,
        margin: 100,
        center: true,
        items: 1.9,
        nav: true,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            768: {
                item: 1.5
            }

        }

    })
    $('.accommo-slide').owlCarousel({
        loop: true,
        margin: 100,
        center: true,
        items: 1.9,
        nav: true,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            768: {
                item: 1.5
            }

        }

    })
    $('.award-slide').owlCarousel({
        loop: true,
        // margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 5,
        statePadding: 30,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 3
            },
            767: {
                item: 5
            }

        }

    })

    $('#date1').datepicker();
    $('#date2').datepicker();
    $('#checkin').datepicker();
    $('#checkout').datepicker();

    // $("#country").countrySelect();




});


/* validate form contact us */
/* validate check-in */
var checkin = document.getElementById("checkin");

var checkinValidation = function() {

    checkinValue = checkin.value.trim();
    checkinErr = document.getElementById('checkin-err');

    if (checkinValue == "") {
        checkinErr.innerHTML = "Check in is required";

    } else {
        checkinErr.innerHTML = "";
        return true;
    }
}

checkin.oninput = function() {

    checkinValidation();
}

/* validate check-out */
var checkout = document.getElementById("checkout");

var checkoutValidation = function() {

    checkoutValue = checkout.value.trim();
    checkoutErr = document.getElementById('checkout-err');

    if (checkoutValue == "") {
        checkoutErr.innerHTML = "Check out is required";

    } else {
        checkoutErr.innerHTML = "";
        return true;
    }
}

checkout.oninput = function() {

    checkoutValidation();
}

/* validate room-id */
var room_id = document.getElementById("room-id");

var room_idValidation = function() {

    room_idValue = room_id.value.trim();
    room_idErr = document.getElementById('room-id-err');

    if (room_idValue == "") {
        room_idErr.innerHTML = "Room is required";

    } else {
        room_idErr.innerHTML = "";
        return true;
    }
}

room_id.oninput = function() {

    room_idValidation();
}

/* validate room-number */
var number_room = document.getElementById("number-room");

var number_roomValidation = function() {

    number_roomValue = number_room.value.trim();
    number_roomErr = document.getElementById('number-room-err');

    if (number_roomValue == "") {
        number_roomErr.innerHTML = "Number room is required";

    } else {
        number_roomErr.innerHTML = "";
        return true;
    }
}

number_room.oninput = function() {

    number_roomValidation();
}

/* validate child */
var child = document.getElementById("child");

var childValidation = function() {

    childValue = child.value.trim();
    childErr = document.getElementById('child-err');

    if (childValue == "") {
        childErr.innerHTML = "Child is required";

    } else {
        childErr.innerHTML = "";
        return true;
    }
}

child.oninput = function() {

    childValidation();
}

/* validate fullname */
var fullname = document.getElementById("fullname");

var fullnameValidation = function() {

    fullnameValue = fullname.value.trim();
    validfullname = /^[a-z\d]{5,12}$/i;
    fullnameErr = document.getElementById('fullname-err');

    if (fullnameValue == "") {
        fullnameErr.innerHTML = "Name is required";

    } else if (!validfullname.test(fullnameValue)) {
        fullnameErr.innerHTML = "First Name must be only string without white spaces";
    } else {
        fullnameErr.innerHTML = "";
        return true;

    }
}

fullname.oninput = function() {

    fullnameValidation();
}

/* validate adults */
var adults = document.getElementById("adults");

var adultsValidation = function() {

    adultsValue = adults.value.trim();
    adultsErr = document.getElementById('adults-err');

    if (adultsValue == "") {
        adultsErr.innerHTML = "Adults is required";

    } else {
        adultsErr.innerHTML = "";
        return true;

    }
}

adults.oninput = function() {
    adultsValidation();
}

/* validate phone */
var phone = document.getElementById("phone");

var phoneValidation = function() {

    phoneValue = phone.value.trim();
    validphone = /^[0-9]*$/;
    phoneErr = document.getElementById('phone-err');

    if (phoneValue == "") {
        phoneErr.innerHTML = "Mobile Number is required";

    } else if (!validphone.test(phoneValue)) {
        phoneErr.innerHTML = "Mobile Number must be a number";
    } else if (phoneValue.length != 10) {

        phoneErr.innerHTML = "Mobile Number must have 10 digits";
    } else {
        phoneErr.innerHTML = "";
        return true;
    }

}
phone.oninput = function() {
    phoneValidation();
}

// Email Address Validation
var email = document.getElementById("email");
var emailValidation = function() {

    emailValue = email.value.trim();
    validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailErr = document.getElementById('email-err');

    if (emailValue == "") {
        emailErr.innerHTML = "Email Address is required";

    } else if (!validemail.test(emailValue)) {
        emailErr.innerHTML = "Email Addre must be in valid formate with @ symbol";
    } else {
        emailErr.innerHTML = "";
        return true;
    }

}

/* validate address */
var address = document.getElementById("address");

var addressValidation = function() {

    addressValue = address.value.trim();
    addressErr = document.getElementById('address-err');

    if (addressValue == "") {
        addressErr.innerHTML = "Address is required";

    } else {
        addressErr.innerHTML = "";
        return true;
    }
}

address.oninput = function() {

    addressValidation();
}


// validation on submit
document.getElementById("form-contact").onsubmit = function(e) {
    fullnameValidation();
    emailValidation();
    phoneValidation();
    adultsValidation();
    checkinValidation();
    checkoutValidation();
    childValidation();
    room_idValidation();
    number_roomValidation();
    addressValidation();

    if (fullnameValidation() == true &&
        emailValidation() == true &&
        phoneValidation() == true &&
        adultsValidation() == true &&
        checkinValidation() == true &&
        checkoutValidation() == true &&
        childValidation() == true &&
        room_idValidation() == true &&
        number_roomValidation() == true &&
        addressValidation() == true
    ) {
        return true;
    } else {
        return false;
    }
}