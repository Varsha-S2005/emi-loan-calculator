# Loan EMI Calculator

## Description
The Loan EMI Calculator is a web-based application that calculates the Equated Monthly Installment (EMI) for a given loan amount, interest rate, and tenure. The application is built using Flask for the backend and HTML, CSS, and JavaScript for the frontend. The backend is hosted on Render.

## Features
- Calculate EMI based on principal amount, interest rate, and tenure.
- Real-time result display.
- Simple and user-friendly interface.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask)
- **Deployment:** Render (Backend)

## How to Use
1. Enter the principal amount (in ₹).
2. Enter the annual interest rate (in %).
3. Enter the loan tenure (in years).
4. Click on the "Calculate EMI" button.
5. The calculated EMI will be displayed below the button.

## Deployed URL
The backend is deployed at:  
[EMI Calculator Backend](https://emi-loan-calculator-backend.onrender.com)

## Example
- **Principal Amount (₹):** 10,000  
- **Annual Interest Rate (%):** 20  
- **Loan Tenure (Years):** 2  
- **Monthly EMI:** ₹508.96

## Project Structure
loan-emi-calculator/
├── app.py             # Main Flask application file
├── requirements.txt   # Dependencies file
├── README.md          # Project documentation
├── templates/         # HTML templates
│   └── index.html      # Main webpage
├── static/            # Static files (CSS, JS)
│   ├── css/
│   │   └── style.css   # Styling file
│   └── js/
│       └── script.js   # EMI calculation script
└── .gitignore          # Ignore unnecessary files

