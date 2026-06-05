# 🧪 SauceDemo QA Test Suite

![QA Badge](https://img.shields.io/badge/QA-Automation-brightgreen)
![Status](https://img.shields.io/badge/Tests-Passing-success)
![Website](https://img.shields.io/badge/Website-saucedemo.com-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

> A comprehensive end-to-end Quality Assurance test suite for [https://www.saucedemo.com](https://www.saucedemo.com) — covering the full user journey from login through payment confirmation.

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

This project contains a structured QA test suite for the **SauceDemo** e-commerce demo application. The goal is to validate the complete user flow — from authentication to order completion — ensuring all critical features behave as expected across different scenarios and user roles.

The tests follow a real-world e-commerce workflow:

```
Login → Product Page → Add to Cart → Remove from Cart → Checkout → Payment → Order Confirmation
```

---

## ✅ Test Coverage

| Module | Test Area | Status |
|---|---|---|
| 🔐 Authentication | Login | ✅ Covered |
| 🔐 Authentication | Logout | ✅ Covered |
| 🛍️ Products | Product Display Page | ✅ Covered |
| 🛒 Cart | Add to Cart | ✅ Covered |
| 🛒 Cart | Remove Item from Cart | ✅ Covered |
| 💳 Checkout | Checkout Gateway / Form | ✅ Covered |
| 💳 Checkout | Payment Options | ✅ Covered |
| ✅ Confirmation | Final Order Confirmation Message | ✅ Covered |

---

## 🛠 Tech Stack

> *(Update this section to match your actual tools)*

| Tool | Purpose |
|---|---|
| **Selenium / Playwright / Cypress** | Browser automation & E2E testing |
| **Python / JavaScript / Java** | Test scripting language |
| **pytest / Mocha / JUnit** | Test runner & reporting framework |
| **GitHub Actions** | CI/CD pipeline |
| **Allure / HTML Report** | Test result reporting |

---

## 📁 Project Structure

```
saucedemo-qa/
│
├── tests/
│   ├── test_login.py              # Login & logout test cases
│   ├── test_product_page.py       # Product display & sorting tests
│   ├── test_cart.py               # Add to cart & remove item tests
│   ├── test_checkout.py           # Checkout gateway & form tests
│   ├── test_payment.py            # Payment options tests
│   └── test_order_confirmation.py # Final confirmation message tests
│
├── pages/                         # Page Object Models (POM)
│   ├── login_page.py
│   ├── product_page.py
│   ├── cart_page.py
│   ├── checkout_page.py
│   └── confirmation_page.py
│
├── utils/
│   ├── config.py                  # Base URL, timeouts, env config
│   └── helpers.py                 # Reusable helper functions
│
├── reports/                       # Generated test reports
│
├── requirements.txt               # Python dependencies
├── conftest.py                    # Fixtures & setup/teardown
└── README.md
```

---

## ⚙️ Prerequisites

Before running the tests, make sure you have the following installed:

- Python 3.8+ (or Node.js if using JS framework)
- pip / npm
- Google Chrome / Firefox
- ChromeDriver / GeckoDriver (matching your browser version)
- Git

---

## 🚀 Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/saucedemo-qa.git
cd saucedemo-qa
```

**2. Create and activate a virtual environment (recommended):**
```bash
python -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows
```

**3. Install dependencies:**
```bash
pip install -r requirements.txt
```

---

## ▶️ Running Tests

**Run the full test suite:**
```bash
pytest tests/
```

**Run a specific test module:**
```bash
pytest tests/test_login.py
pytest tests/test_cart.py
```

**Run with verbose output:**
```bash
pytest tests/ -v
```

**Run with HTML report:**
```bash
pytest tests/ --html=reports/report.html --self-contained-html
```

**Run tests by tag/marker:**
```bash
pytest tests/ -m "smoke"
pytest tests/ -m "regression"
```

---

## 🔍 Test Scenarios

### 🔐 1. Login Tests (`test_login.py`)
- ✅ Valid login with standard user credentials
- ✅ Login with locked-out user (expects error message)
- ✅ Login with invalid username/password
- ✅ Login with empty fields (form validation)
- ✅ Login with problem user / performance glitch user

### 🚪 2. Logout Tests (`test_login.py`)
- ✅ Successful logout via hamburger menu
- ✅ Verify user is redirected to login page after logout
- ✅ Verify protected pages are inaccessible after logout

### 🛍️ 3. Product Display Page Tests (`test_product_page.py`)
- ✅ All products are displayed on the inventory page
- ✅ Product name, image, description, and price are visible
- ✅ Sort products by Name (A→Z / Z→A)
- ✅ Sort products by Price (Low→High / High→Low)
- ✅ Clicking a product opens its detail page
- ✅ Product detail page displays correct information

### 🛒 4. Add to Cart Tests (`test_cart.py`)
- ✅ Add a single product to the cart from the inventory page
- ✅ Add multiple products to the cart
- ✅ Cart badge count updates correctly after adding items
- ✅ Added items are correctly listed in the cart page
- ✅ Add to cart from individual product detail page

### ❌ 5. Remove Item from Cart Tests (`test_cart.py`)
- ✅ Remove an item directly from the cart page
- ✅ Remove an item using the "Remove" button on the inventory page
- ✅ Cart badge count decreases after removing items
- ✅ Cart is empty when all items are removed

### 💳 6. Checkout Gateway Tests (`test_checkout.py`)
- ✅ Navigate to checkout from the cart page
- ✅ Checkout form displays (First Name, Last Name, Postal Code)
- ✅ Submit form with all valid details
- ✅ Submit form with missing First Name (expects error)
- ✅ Submit form with missing Last Name (expects error)
- ✅ Submit form with missing Postal Code (expects error)
- ✅ Cancel checkout returns user to cart

### 💰 7. Payment & Order Summary Tests (`test_payment.py`)
- ✅ Order overview page displays all selected items
- ✅ Item total price is calculated correctly
- ✅ Tax is displayed on the summary page
- ✅ Final total (items + tax) is accurate
- ✅ "Finish" button completes the order

### ✅ 8. Order Confirmation Message Tests (`test_order_confirmation.py`)
- ✅ Confirmation page is displayed after successful order
- ✅ Success header text: *"Thank you for your order!"*
- ✅ Confirmation message body is displayed
- ✅ "Back Home" button returns the user to the products page

---

## 🔑 Test Credentials

SauceDemo provides the following built-in test users:

| Username | Password | Behavior |
|---|---|---|
| `standard_user` | `secret_sauce` | Normal user — all features work |
| `locked_out_user` | `secret_sauce` | Blocked at login |
| `problem_user` | `secret_sauce` | UI bugs/issues throughout |
| `performance_glitch_user` | `secret_sauce` | Simulated slow performance |
| `error_user` | `secret_sauce` | Throws errors on certain actions |
| `visual_user` | `secret_sauce` | Visual layout issues |

> ⚠️ These credentials are publicly available on the SauceDemo website and are intended for testing purposes only.

---

## 🐛 Bug Reporting

If you discover a bug or a test failure, please open an issue using the following template:

```
**Title:** [Brief description of the bug]

**Environment:**
- Browser: Chrome 124 / Firefox 125
- OS: Windows 11 / macOS Ventura
- Test User: standard_user

**Steps to Reproduce:**
1. Navigate to https://www.saucedemo.com
2. Log in as standard_user
3. ...

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happened]

**Screenshots/Logs:**
[Attach if applicable]
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-test-name`
3. Add your test cases with proper documentation
4. Ensure all existing tests still pass
5. Submit a Pull Request with a clear description

Please follow the existing naming conventions and use Page Object Model (POM) patterns when adding new tests.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

<p align="center">
  Made with ❤️ for QA Excellence | Tested on <a href="https://www.saucedemo.com">saucedemo.com</a>
</p>
