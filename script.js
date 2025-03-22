function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
    const time = parseFloat(document.getElementById("time").value) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    document.getElementById("result").innerHTML = `Monthly EMI: ₹${emi.toFixed(2)}`;
}
