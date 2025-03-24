function calculateEMI() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const tenure = document.getElementById("tenure").value;

    fetch('/calculate_emi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ principal, rate, tenure })
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
