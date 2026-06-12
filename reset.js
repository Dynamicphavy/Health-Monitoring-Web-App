import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

// App Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM9C82uPDtmPktWPE7yOFnFHBkVrXcgJs",
    authDomain: "wearable-health-device.firebaseapp.com",
    databaseURL: "https://wearable-health-device-default-rtdb.firebaseio.com",
    projectId: "wearable-health-device",
    storageBucket: "wearable-health-device.firebasestorage.app",
    messagingSenderId: "788068841388",
    appId: "1:788068841388:web:fac64090f50a13d07a6c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById("submit");
const message = document.getElementById("msg");

// Submit functionalities
submit.addEventListener("click", function(event) {
    event.preventDefault()

    const email = document.getElementById("email").value; // Input

    // Validation
    if (!email) {
        message.textContent = "Please enter your email address";
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            message.textContent = `Password reset email sent to ${email}. Check your inbox.`;
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    message.textContent = "Invalid email address."
                    break;
                case "auth/too-many-requests":
                    message.textContent = "Too many requests. Try again later";
                    break;
                default:
                    message.textContent = `Error: ${error.message}`;
            }
        })
})