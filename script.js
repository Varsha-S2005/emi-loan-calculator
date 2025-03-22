function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    fetch("https://emi-loan-calculator-backend.onrender.com/calculate_emi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            principal: principal,
            rate: rate,
            time: time
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("result").innerHTML = "Error calculating EMI. Please try again.";
        } else {
            document.getElementById("result").innerHTML = `Monthly EMI: ₹${data.emi}`;
        }
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "Error connecting to the server. Please try again later.";
        console.error("Error:", error);
    });
}
