
// Feature 1: Show and hide projects

const toggleProjects = document.querySelector("#toggleProjects");
const projectList = document.querySelector("#projectList");

if (toggleProjects && projectList) {

    toggleProjects.addEventListener("click", function () {

        projectList.hidden = !projectList.hidden;

        toggleProjects.textContent = projectList.hidden
            ? "Show Projects"
            : "Hide Projects";

        toggleProjects.setAttribute(
            "aria-expanded",
            String(!projectList.hidden)
        );

    });
}


// Feature 2: Contact form validation

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    const nameInput = document.querySelector("#contactName");
    const emailInput = document.querySelector("#contactEmail");
    const subjectInput = document.querySelector("#contactSubject");
    const messageInput = document.querySelector("#contactMessage");
    const formSuccess = document.querySelector("#formSuccess");

    const requiredFields = [
        {
            input: nameInput,
            error: document.querySelector("#nameError"),
            message: "Please enter your full name."
        },
        {
            input: emailInput,
            error: document.querySelector("#emailError"),
            message: "Please enter your email address."
        },
        {
            input: subjectInput,
            error: document.querySelector("#subjectError"),
            message: "Please enter a subject."
        },
        {
            input: messageInput,
            error: document.querySelector("#messageError"),
            message: "Please enter a message."
        }
    ];

    // Display accessible error messages

    function showError(field, message) {

        field.error.textContent = message;
        field.input.setAttribute("aria-invalid", "true");

    }

    // Clear error messages

    function clearError(field) {

        field.error.textContent = "";
        field.input.removeAttribute("aria-invalid");

    }

    // Clear errors when the user starts typing

    requiredFields.forEach(function (field) {

        field.input.addEventListener("input", function () {

            clearError(field);
            formSuccess.textContent = "";

        });

    });

    // Validate the form

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;
        let firstInvalidField = null;

        formSuccess.textContent = "";

        requiredFields.forEach(function (field) {

            clearError(field);

            if (field.input.value.trim() === "") {

                showError(field, field.message);
                isValid = false;

                if (!firstInvalidField) {
                    firstInvalidField = field.input;
                }

            } else if (
                field.input === emailInput &&
                emailInput.validity.typeMismatch
            ) {

                showError(
                    field,
                    "Please enter a valid email address."
                );

                isValid = false;

                if (!firstInvalidField) {
                    firstInvalidField = field.input;
                }

            }

        });

        // Focus on the first incorrect field

        if (!isValid) {

            firstInvalidField.focus();
            return;

        }

        // Display confirmation message

        formSuccess.textContent =
            "Your form passed validation! No message was sent.";

        contactForm.reset();

    });

}

// Feature 3: API Fetch - Bonus

const factButton = document.querySelector("#factButton");
const factDisplay = document.querySelector("#factDisplay");

if (factButton && factDisplay) {

    factButton.addEventListener("click", async function () {

        factDisplay.textContent = "Loading a fun fact...";
        factButton.disabled = true;

        try {

            const response = await fetch(
                "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
            );

            if (!response.ok) {
                throw new Error("Unable to retrieve fact.");
            }

            const data = await response.json();

            factDisplay.textContent = data.text;

        } catch (error) {

            factDisplay.textContent =
                "Unable to load a fact. Please try again.";

        } finally {

            factButton.disabled = false;
        }
    });
}
