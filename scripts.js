function validateAndBook() {
    const whereTo = document.querySelector('select').value;
    const howMany = document.getElementById('how-many').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const description = document.getElementById('description').value;

    const today = new Date().toISOString().split('T')[0];

    if (whereTo !== "Select" && howMany > 0 && startDate && endDate && description.length >= 50 && description.length <= 500) {
        if (startDate > today && startDate < endDate) {
            alert("Booking Successful");
        } else {
            alert("Start date must be a future date and less than end date.");
        }
    } else {
        alert("Please fill out all fields correctly.");
    }
}

function updateCharCount() {
    const textarea = document.getElementById('description');
    const charCount = document.getElementById('charCount');
    charCount.textContent = `${textarea.value.length}/500`;
}

$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function validateRegisterForm() {
const fullname = document.getElementById('fullname').value.trim();
const contact = document.getElementById('contact').value.trim();
const dob = document.getElementById('dob').value;
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const gender = document.getElementById('gender').value;

// Fullname validation
if (fullname === "" || fullname.length < 3) {
    alert("Fullname must be at least 3 characters long.");
    return false;
}

// Contact validation (10-digit phone number)
const contactRegex = /^[0-9]{10}$/;
if (!contactRegex.test(contact)) {
    alert("Contact must be a valid 10-digit phone number.");
    return false;
}

// Date of Birth validation
if (dob === "") {
    alert("Please select your Date of Birth.");
    return false;
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
}

// Password validation (minimum 6 characters)
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
}

// Gender validation
if (gender === "Select Gender") {
    alert("Please select your gender.");
    return false;
}

// If all validations pass
alert("Registration Successful!");
return true;
}

function validateLoginForm() {
const email = document.getElementById('loginEmail').value.trim();
const password = document.getElementById('loginPassword').value.trim();

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
}

// Password validation (minimum 6 characters)
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
}

// If all validations pass
alert("Login Successful!");
return true;
}