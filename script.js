function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
        document.getElementById("result").innerText = "Please enter valid positive numbers.";
        return;
    }

    const monthlyRate = rate / (12 * 100);
    const months = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    if (isFinite(emi)) {
        document.getElementById("result").innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Error calculating EMI.";
    }
}
