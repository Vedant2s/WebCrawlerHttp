# 🌐 JS Web Crawler Project

A simple JavaScript-based web crawler that extracts information from web pages using `jsdom`.

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your Linux system.

---

## 🛠️ Prerequisites

- Linux OS
- curl installed
- Basic familiarity with terminal commands

---

## 📥 Step 1: Install Node.js (LTS) using NVM

### For Linux:
```bash
# Download and install NVM:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Load NVM without restarting shell:
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js LTS (v22):
nvm install 22

# Verify Node.js version:
node -v # Should print "v22.17.0"

# Verify NVM is using correct version:
nvm current # Should print "v22.17.0"

# Verify npm version:
npm -v # Should print "10.9.2"
```
## 📂 Step 2: Setup Project
```bash
# Switch to Node.js version 22 if not already selected
nvm use 22

# Install project dependencies recommended
npm install

# Install jsdom library (optional)
npm install jsdom

# Install Jest for testing (optional)
npm install jest --save-dev
```

## ✅ Step 3: Run Tests
```bash
npm test
```

## 🚀 Step 4: Run the Web Crawler
```bash
npm start https://samplewebsitename.com
```
> 🔗 Replace https://samplewebsitename.com with the actual website URL you want to crawl.
## 📌 Notes
- Make sure you have a stable internet connection while crawling websites.

- Respect the target website’s robots.txt file and terms of service.
## 🛠️ Tech Stack
- Node.js v22.17.0

- jsdom

- Jest (for testing)
## 🤝 License
This project is for educational purposes. Please ensure you have permission before crawling any website.

---