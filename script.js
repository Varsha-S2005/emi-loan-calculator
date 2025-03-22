async function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
    const time = parseFloat(document.getElementById("time").value) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    try {
        const response = await fetch("https://emi-loan-calculator-backend.onrender.com/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ principal, rate, time })
        });
        
        const data = await response.json();
        
        document.getElementById("result").innerHTML = `Monthly EMI: ₹${data.emi.toFixed(2)}`;

        const amortizationTable = document.querySelector("#amortization-table tbody");
        amortizationTable.innerHTML = "";
        data.schedule.forEach((entry, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>₹${entry.principal.toFixed(2)}</td>
                <td>₹${entry.interest.toFixed(2)}</td>
                <td>₹${data.emi.toFixed(2)}</td>
                <td>₹${entry.balance.toFixed(2)}</td>
            </tr>`;
            amortizationTable.innerHTML += row;
        });

        const chartContext = document.getElementById("emiChart").getContext("2d");
        new Chart(chartContext, {
            type: "pie",
            data: {
                labels: ["Principal Amount", "Total Interest"],
                datasets: [{
                    data: [principal, data.totalInterest],
                    backgroundColor: ["#4CAF50", "#FF5733"]
                }]
            },
            options: {
                responsive: true
            }
        });

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Error calculating EMI.";
    }
}
