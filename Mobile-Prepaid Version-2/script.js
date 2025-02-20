// Function to check login status
function isLoggedIn() {
    return localStorage.getItem("userLoggedIn") === "true"; // Example login check
}

// Function to handle Recharge button click
function handleRechargeClick() {
    if (isLoggedIn()) {
        window.location.href = "./Payment.html"; // Redirect to payment if logged in
    } else {
        window.location.href = "index.html#zen"; // Redirect to index if not logged in
    }
}

// Function to validate phone number and proceed to payment
function validateAndProceed() {
    let phoneInput = document.querySelector("#zen input[type='tel']");
    let phoneNumber = phoneInput.value.trim();

    if (/^\d{10}$/.test(phoneNumber)) {
        localStorage.setItem("userPhone", phoneNumber); // Store phone number
        window.location.href = "payment.html"; // Redirect to payment
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
}

// Event listener for the "Go" button on the index page
document.addEventListener("DOMContentLoaded", function () {
    let goButton = document.querySelector("#zen .btn-danger");
    if (goButton) {
        goButton.addEventListener("click", validateAndProceed);
    }
});
