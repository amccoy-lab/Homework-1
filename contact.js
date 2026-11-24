
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

const fields = [
    {
        input: document.getElementById("full-name"),
        error: document.getElementById("name-error"),
        label: "Full name"
    },
    {
        input: document.getElementById("email"),
        error: document.getElementById("email-error"),
        label: "Email address"
    },
    {
        input: document.getElementById("message"),
        error: document.getElementById("message-error"),
        label: "Message"
    }
];

function validateField(field) {
    const value = field.input.value.trim();
    let errorMessage = "";

    if (value === "") {
        errorMessage = `${field.label} is required.`;
    } else if (
        field.input.type === "email" &&
        !field.input.validity.valid
    ) {
        errorMessage = "Enter a valid email address.";
    }

    field.error.textContent = errorMessage;

    if (errorMessage) {
        field.input.setAttribute("aria-invalid", "true");
    } else {
        field.input.removeAttribute("aria-invalid");
    }

    return errorMessage === "";
}

fields.forEach((field) => {
    field.input.addEventListener("input", () => {
        if (field.input.hasAttribute("aria-invalid")) {
            validateField(field);
        }
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalidField = null;

    fields.forEach((field) => {
        const isValid = validateField(field);

        if (!isValid && firstInvalidField === null) {
            firstInvalidField = field.input;
        }
    });

    if (firstInvalidField) {
        statusMessage.textContent =
            "Please correct the errors in the form.";
        statusMessage.className = "form-status error";

        firstInvalidField.focus();
        return;
    }

    statusMessage.textContent =
        "Your form is complete and valid. " +
        "This demonstration does not send messages.";

    statusMessage.className = "form-status success";
});
