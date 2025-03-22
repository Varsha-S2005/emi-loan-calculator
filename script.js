async function calculateEMI() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    try {
        const response = await fetch("https://emi-loan-calculator-backend-1.onrender.com/calculate_emi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ principal, rate, time })
        });

        const data = await response.json();

        if (data.error) {
            document.getElementById("result").innerText = data.error;
        } else {
            document.getElementById("result").innerText = "Monthly EMI: ₹" + data.emi;
        }
    } catch (error) {
        document.getElementById("result").innerText = "Error calculating EMI.";
    }
}
