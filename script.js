function calculateEMI() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("tenure").value;  // Changed from tenure to time

    fetch('https://emi-loan-calculator-backend-5.onrender.com/calculate_emi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ principal, rate, time })  // Corrected to use 'time' instead of 'tenure'
    })
    .then(response => response.json())
    .then(data => {
        if (data.emi) {
            document.getElementById("result").innerText = `EMI: ₹ ${data.emi}`;
        } else {
            document.getElementById("result").innerText = `Error: ${data.error}`;
        }
    })
    .catch(error => {
        document.getElementById("result").innerText = `Error: Unable to calculate EMI`;
        console.error("Error:", error);
    });
}
