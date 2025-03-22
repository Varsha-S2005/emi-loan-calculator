function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    fetch("https://emi-loan-calculator-backend.onrender.com/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ principal, rate, time })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = `
            <p>Monthly EMI: ₹${data.emi}</p>
            <p>Total Interest: ₹${data.total_interest}</p>
            <p>Total Payment: ₹${data.total_payment}</p>
        `;

        const table = document.getElementById("amortization-table");
        table.innerHTML = `
            <tr>
                <th>Month</th>
                <th>EMI</th>
                <th>Interest Payment</th>
                <th>Principal Payment</th>
                <th>Remaining Balance</th>
            </tr>
        `;
        data.amortization_schedule.forEach(item => {
            const row = table.insertRow();
            row.insertCell().innerHTML = item.month;
            row.insertCell().innerHTML = `₹${item.emi}`;
            row.insertCell().innerHTML = `₹${item.interest_payment}`;
            row.insertCell().innerHTML = `₹${item.principal_payment}`;
            row.insertCell().innerHTML = `₹${item.balance}`;
        });

        displayGraph(data.amortization_schedule);
    });
}

function displayGraph(schedule) {
    const months = schedule.map(item => item.month);
    const principalPayments = schedule.map(item => item.principal_payment);
    const interestPayments = schedule.map(item => item.interest_payment);

    new Chart(document.getElementById("emiGraph"), {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: "Principal Payment",
                    data: principalPayments,
                    borderColor: "green",
                    fill: false
                },
                {
                    label: "Interest Payment",
                    data: interestPayments,
                    borderColor: "red",
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: "EMI Breakdown Over Time"
            }
        }
    });
}
