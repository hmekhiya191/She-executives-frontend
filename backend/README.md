# 🚀 Backend – She's Executives Contact Service

This is the backend service for handling contact form submissions, file uploads, and automated email responses for the She's Executives website.

---

## 📌 Features

* 📩 Send emails using Nodemailer (Gmail SMTP)
* 📎 File upload support (attachments + resumes)
* 📨 Auto-reply email to users
* 🧠 Dynamic subject & content based on form selection
* 🔐 Environment-based configuration (secure)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Nodemailer
* Multer
* dotenv
* CORS

---

## 📁 Project Structure

```
backend/
│── server.js
│── package.json
│── .env (not included in repo)
│── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/backend-repo.git
cd backend-repo
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

Create a `.env` file in the root directory and add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

> ⚠️ Use a Gmail App Password (not your actual password)

---

### 4️⃣ Start the server

```
npm run dev
```

or

```
npm start
```

---

## 🌐 API Endpoint

### POST `/send-email`

Handles contact form submission and sends email with optional attachments.

### 🔸 Request Type:

`multipart/form-data`

### 🔸 Fields:

| Field         | Type   | Description           |
| ------------- | ------ | --------------------- |
| name          | string | User name (required)  |
| email         | string | User email (required) |
| message       | string | Message content       |
| service       | string | Selected service      |
| course        | string | (optional)            |
| date          | string | (optional)            |
| time          | string | (optional)            |
| pledge        | string | (optional)            |
| customSubject | string | (optional)            |
| company       | string | (optional)            |
| amount        | string | (optional)            |

### 🔸 Files:

* `attachment` (optional)
* `resume` (optional)

---

## ✉️ Email Functionality

* Sends email to admin (EMAIL_USER)
* Includes all form details
* Supports file attachments
* Sends auto-response email to user

---

## 🚀 Deployment (Render)

1. Push code to GitHub
2. Go to https://render.com
3. Create a new **Web Service**
4. Connect your repository

### Build Command:

```
npm install
```

### Start Command:

```
npm start
```

---

## 🔐 Environment Variables (Render)

Add these in Render dashboard:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## ⚠️ Notes

* Do NOT commit `.env` file
* Use App Password for Gmail SMTP
* Enable CORS for frontend domain

---

## 👩‍💻 Author

Developed by She's Executives Team

---

## 📄 License

This project is for internal/business use.
