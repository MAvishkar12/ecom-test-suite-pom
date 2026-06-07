# 🧪 SauceDemo QA Test Suite

![QA Badge](https://img.shields.io/badge/QA-Automation-brightgreen)
![Playwright](https://img.shields.io/badge/Playwright-JavaScript-orange)
![Status](https://img.shields.io/badge/Tests-Passing-success)
![Website](https://img.shields.io/badge/Website-saucedemo.com-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

> A comprehensive end-to-end Quality Assurance test suite for [https://www.saucedemo.com](https://www.saucedemo.com) — built with **Playwright + JavaScript**, covering the full user journey from login through payment confirmation.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Test Coverage](#-test-coverage)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Test Scenarios](#-test-scenarios)
- [Test Credentials](#-test-credentials)
- [Bug Reporting](#-bug-reporting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 Project Overview

This project contains a structured QA test suite for the **SauceDemo** e-commerce demo application. The goal is to validate the complete user flow — from authentication to order completion — ensuring all critical features behave as expected across different user roles and edge cases.

The tests follow a real-world e-commerce workflow:

```
Login → Product Page → Add to Cart → Remove from Cart → Checkout → Payment → Order Confirmation
```

---

## ✅ Test Coverage

| Module | Test File | Status |
|---|---|---|
| 🔐 Login & Logout | `tests/login.spec.js` | ✅ Covered |
| 🛍️ Product Display & Search | `tests/productSearch.spec.js` | ✅ Covered |
| 🛒 Cart — Add & Remove | `tests/Cart.spec.js` | ✅ Covered |
| 💳 Checkout Gateway | `tests/CheckoutPage.spec.js` | ✅ Covered |
| 💰 Payment & Order Summary | `tests/CheckoutPage.spec.js` | ✅ Covered |
| ✅ Order Confirmation | `tests/CheckoutPage.spec.js` | ✅ Covered |

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| **Playwright** | Browser automation & E2E testing |
| **JavaScript (Node.js)** | Test scripting language |
| **@playwright/test** | Test runner, assertions & reporting |
| **Page Object Model (POM)** | Maintainable test architecture |
| **HTML / JSON Reporter** | Test result reporting |
| **GitHub Actions** | CI/CD pipeline (optional) |

---

## 📁 Project Structure

```
PROJECT_1/
│
├── .github/                         # GitHub Actions CI workflows
│
├── pages/                           # Page Object Models (POM)
│   ├── Checkout.js                  # Checkout page actions & locators
│   ├── LoginPage.js                 # Login page actions & locators
│   ├── LogoutPage.js                # Logout actions & locators
│   └── Payment.js                   # Payment page actions & locators
│
├── tests/                           # Test spec files
│   ├── Cart.spec.js                 # Add to cart & remove item tests
│   ├── CheckoutPage.spec.js         # Checkout gateway, payment & confirmation tests
│   ├── login.spec.js                # Login & logout tests
│   └── productSearch.spec.js        # Product display & search tests
│
├── utils/
│   └── UserPaymentError.js          # Reusable error handlers & payment utilities
│
├── playwright-report/               # Auto-generated Playwright HTML reports
├── test-results/                    # Raw test result output
│
├── .gitignore                       # Files/folders excluded from Git
├── data.json                        # Test data (credentials, user info, etc.)
├── package-lock.json                # Locked dependency versions
└── README.md                        # Project documentation
```

---

## ⚙️ Prerequisites

Make sure you have the following installed before running the tests:

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- Git

---

## 🚀 Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/saucedemo-qa.git
cd saucedemo-qa
```

**2. Install dependencies:**
```bash
npm install
```

**3. Install Playwright browsers:**
```bash
npx playwright install
```

---

## ▶️ Running Tests

**Run the full test suite:**
```bash
npx playwright test
```

**Run a specific test file:**
```bash
npx playwright test tests/login.spec.js
npx playwright test tests/Cart.spec.js
npx playwright test tests/CheckoutPage.spec.js
npx playwright test tests/productSearch.spec.js
```

**Run tests in headed mode (see the browser):**
```bash
npx playwright test --headed
```

**Run tests in a specific browser:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run with verbose output:**
```bash
npx playwright test --reporter=list
```

**Generate & open HTML report:**
```bash
npx playwright test --reporter=html
npx playwright show-report
```

**Run tests in debug mode:**
```bash
npx playwright test --debug
```

---

## 🔍 Test Scenarios

### 🔐 1. Login Tests — `tests/login.spec.js`
Uses → `pages/LoginPage.js`

- ✅ Valid login with standard user credentials
- ✅ Login with locked-out user (expects error message)
- ✅ Login with invalid username and/or password
- ✅ Login with empty username field
- ✅ Login with empty password field
- ✅ Login with both fields empty

### 🚪 2. Logout Tests — `tests/login.spec.js`
Uses → `pages/LogoutPage.js`

- ✅ Successful logout via hamburger menu
- ✅ Verify redirect to login page after logout
- ✅ Verify protected pages are inaccessible after logout

### 🛍️ 3. Product Display Page Tests — `tests/productSearch.spec.js`

- ✅ All products are displayed on the inventory page
- ✅ Product name, image, description, and price are visible
- ✅ Sort products by Name (A→Z)
- ✅ Sort products by Name (Z→A)
- ✅ Sort products by Price (Low→High)
- ✅ Sort products by Price (High→Low)
- ✅ Clicking a product navigates to its detail page
- ✅ Product detail page shows correct name, price, and description

### 🛒 4. Add to Cart Tests — `tests/Cart.spec.js`

- ✅ Add a single product to the cart from the inventory page
- ✅ Add multiple products to the cart
- ✅ Cart badge counter increments correctly
- ✅ Added items appear correctly in the cart page
- ✅ Add to cart from individual product detail page

### ❌ 5. Remove Item from Cart Tests — `tests/Cart.spec.js`

- ✅ Remove an item directly from the cart page
- ✅ Remove an item using the "Remove" button on the inventory page
- ✅ Cart badge count decrements after removing an item
- ✅ Cart is empty when all items are removed
- ✅ Removed items no longer appear in the cart list

### 💳 6. Checkout Gateway Tests — `tests/CheckoutPage.spec.js`
Uses → `pages/Checkout.js`

- ✅ Navigate to checkout from the cart page
- ✅ Checkout form displays (First Name, Last Name, Postal Code)
- ✅ Submit form with all valid details — proceeds to order summary
- ✅ Submit with missing First Name — displays validation error
- ✅ Submit with missing Last Name — displays validation error
- ✅ Submit with missing Postal Code — displays validation error
- ✅ Cancel checkout returns user to cart

### 💰 7. Payment & Order Summary Tests — `tests/CheckoutPage.spec.js`
Uses → `pages/Payment.js`, `utils/UserPaymentError.js`

- ✅ Order overview page displays all selected items
- ✅ Item total price is calculated and displayed correctly
- ✅ Tax amount is shown on the summary page
- ✅ Final total (items + tax) is accurate
- ✅ Payment error handling for invalid/incomplete details

### ✅ 8. Order Confirmation Message Tests — `tests/CheckoutPage.spec.js`

- ✅ Confirmation page displays after successful order placement
- ✅ Success header: *"Thank you for your order!"* is shown
- ✅ Confirmation body message is displayed
- ✅ "Back Home" button navigates back to the products page

---

## 🗂 Test Data

Test data such as user credentials and form inputs are stored in `data.json`:

```json
{
  "users": {
    "standard": {
      "username": "standard_user",
      "password": "secret_sauce"
    },
    "locked": {
      "username": "locked_out_user",
      "password": "secret_sauce"
    }
  },
  "checkout": {
    "firstName": "John",
    "lastName": "Doe",
    "postalCode": "411001"
  }
}
```

---

## 🔑 Test Credentials

SauceDemo provides the following built-in test users:

| Username | Password | Behavior |
|---|---|---|
| `standard_user` | `secret_sauce` | Normal user — all features work correctly |
| `locked_out_user` | `secret_sauce` | Blocked at login with error message |
| `problem_user` | `secret_sauce` | UI bugs and broken elements throughout |
| `performance_glitch_user` | `secret_sauce` | Simulated slow/delayed performance |
| `error_user` | `secret_sauce` | Throws errors on certain actions |
| `visual_user` | `secret_sauce` | Visual layout distortions |

> ⚠️ These credentials are publicly available on the SauceDemo website and are intended solely for testing purposes.

---

## 🐛 Bug Reporting

Found a bug or a failing test? Open an issue using this template:

```
**Title:** [Short description of the bug]

**Environment:**
- Browser: Chromium / Firefox / WebKit
- OS: Windows 11 / macOS / Ubuntu
- Node.js version: v18.x
- Playwright version: x.x.x
- Test User: standard_user

**Steps to Reproduce:**
1. Navigate to https://www.saucedemo.com
2. Log in as standard_user
3. ...

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happened]

**Screenshots / Trace:**
[Attach Playwright trace or screenshot if applicable]
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/test-your-feature`
3. Write your tests following the Page Object Model pattern
4. Ensure all existing tests still pass: `npx playwright test`
5. Commit your changes: `git commit -m "feat: add tests for XYZ"`
6. Push to your branch: `git push origin feature/test-your-feature`
7. Open a Pull Request with a clear description of what was added

**Code conventions:**
- Use Page Object Model (POM) for all page interactions — add new page classes in `/pages`
- Store reusable logic in `/utils`
- Name spec files as `*.spec.js`
- Keep test data in `data.json`

---


---

Allure Report 
<img width="1920" height="1080" alt="Screenshot 2026-06-07 155541" src="https://github.com/user-attachments/assets/fe3e1e87-7b41-455d-abf6-0ccd9784fcd4" />
<img width="1920" height="1080" alt="Screenshot 2026-06-07 155214" src="https://github.com/user-attachments/assets/7318a1b6-ce3c-4765-8cbd-5fec6604a463" />




## 👨‍💻 Author

**Your Name**
- GitHub: [MAvishkar12](https://github.com/MAvishkar12)
- LinkedIn: [Avishkar_More](https://www.linkedin.com/in/moreavishkar1217/)

---

<p align="center">
  Made with ❤️ for QA Excellence &nbsp;|&nbsp; Tested on <a href="https://www.saucedemo.com">saucedemo.com</a> &nbsp;|&nbsp; Powered by Playwright
</p>
