const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";

const feedbackFormData = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : { 'email': '', 'message': '' };
email.value = feedbackFormData.email;
message.value = feedbackFormData.message;

form.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT") {
        feedbackFormData.email = email.value.trim();
    }
    if (event.target.tagName === "TEXTAREA") {
        feedbackFormData.message = message.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(feedbackFormData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value.trim() !== "" && message.value.trim() !== "") {
        console.log(feedbackFormData);
        feedbackFormData.email = '';
        feedbackFormData.message = '';
        localStorage.removeItem(localStorageKey);
        form.reset();
    } else {
        console.error("Please, fill all fileds!");
    }
});