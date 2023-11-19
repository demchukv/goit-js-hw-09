const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";

const localFormData = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : { 'email': '', 'message': '' };
email.value = localFormData.email;
message.value = localFormData.message;

form.addEventListener("input", (event) => {
    if (event.target.name === "email") {
        localFormData.email = email.value.trim();
    }
    if (event.target.name === "message") {
        localFormData.message = message.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(localFormData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (localFormData.email !== "" && localFormData.message !== "") {
        console.log(localFormData);
        localFormData.email = '';
        localFormData.message = '';
        localStorage.removeItem(localStorageKey);
        form.reset();
    } else {
        alert("Please, fill all fields!");
    }
});