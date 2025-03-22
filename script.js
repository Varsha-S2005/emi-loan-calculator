const apiUrl = "https://emi-loan-backend.onrender.com";  // Backend API URL

async function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
    const time = parseFloat(document.getElementById("time").value) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/calculate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ principal, rate, time }),
        });

        if (!response.ok) {
            throw new Error("Failed to calculate EMI");
        }

        const data = await response.json();
        document.getElementById("result").innerHTML = `
            <p>Monthly EMI: ₹${data.emi.toFixed(2)}</p>
            <p>Total Interest: ₹${data.totalInterest.toFixed(2)}</p>
            <p>Total Payment: ₹${data.totalPayment.toFixed(2)}</p>
        `;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Error calculating EMI. Please try again.";
    }
}
