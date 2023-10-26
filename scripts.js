document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupResults = document.getElementById("popup-results");

    submitButton.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = [];
        const genderCheckboxes = document.getElementsByName("gender");
        genderCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                gender.push(checkbox.nextSibling.textContent);
            }
        });
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Validate the form (add your own validation logic here)
        if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Display the results in the popup
        const results = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        popupResults.innerHTML = results;

        // Show the popup
        popup.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        // Close the popup and reset the form
        popup.style.display = "none";
        form.reset();
    });
});
