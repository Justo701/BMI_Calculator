document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const weightInput = document.getElementById("weight");                const heightInput = document.getElementById("height");
    const bmiSpan = document.getElementById("bmi");                       const categorySpan = document.getElementById("category");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height)) {
            alert("Please enter valid weight and height.");
            return;
        }

        const formData = new FormData();
        formData.append("weight", weight);
        formData.append("height", height);

        fetch("/calculate", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            bmiSpan.textContent = data.bmi.toFixed(2);
            categorySpan.textContent = data.category;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
