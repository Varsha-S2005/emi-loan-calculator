function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const tenure = parseInt(document.getElementById("tenure").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(tenure)) {
        alert("Please enter valid numbers");
        return;
    }

    fetch("http://127.0.0.1:5000/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ principal, rate, tenure })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = `
            EMI: ₹${data.emi} <br>
            Total Interest: ₹${data.total_interest} <br>
            Total Payment: ₹${data.total_payment}
        `;
    })
    .catch(error => console.error("Error:", error));
}
