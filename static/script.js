document.getElementById("calculate-btn").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Please enter valid values for weight and height.";
    } else {
        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);

        const resultMessage = `Your BMI is ${bmi.toFixed(2)}. You are categorized as ${category}.`;
        document.getElementById("result").innerHTML = resultMessage;
    }
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
}

