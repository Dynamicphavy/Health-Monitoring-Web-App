import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

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

    // Inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log In
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in 
            const user = userCredential.user;
            alert("Logging In");
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            message.textContent = errorMessage;
        });
})