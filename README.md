# 🤖 AI Resume Analyzer

An AI-powered resume analysis application that helps users evaluate their resumes, identify strengths and weaknesses, and discover opportunities to improve their resumes for job applications.

## ✨ Features

- 📄 **PDF Resume Upload** — Upload a resume in PDF format for analysis.
- 🧠 **AI-Powered Analysis** — Uses Google's Gemini API to analyze resume content.
- 📊 **ATS-Style Scoring** — Provides a resume score with insights into potential improvements.
- 💪 **Strengths & Weaknesses** — Highlights strong areas and aspects that need improvement.
- 🎯 **Missing Skills** — Identifies skills that may be missing from the resume.
- 💡 **Improvement Suggestions** — Provides actionable recommendations to improve resume quality.
- 💬 **Interview Preparation** — Generates interview questions based on resume information.
- ☁️ **Cloudinary Integration** — Supports cloud-based file handling.
- 🔐 **Authentication** — Includes authentication-related backend routes and middleware.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary
- Gemini API
- pdf-parse

## 🏗️ Project Structure

```text
AI-Resume-Analyzer/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env                 # Create locally
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB or a MongoDB connection URI
- Google Gemini API key
- Cloudinary account credentials

### 1. Clone the Repository

```bash
git clone https://github.com/masumdubey91/Ai-resume-analyzer.git
cd Ai-resume-analyzer
```

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory and configure the environment variables required by your application.

Example configuration — use the exact variable names expected by your backend code:

```env
PORT=5002
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
```

Start the backend using the script defined in `Backend/package.json`. For example:

```bash
npm start
```

If your project uses a `dev` script instead, run `npm run dev`.

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## 🔄 How It Works

1. The user uploads a resume in PDF format.
2. The backend receives the uploaded file.
3. Resume text is extracted from the PDF.
4. The extracted information is sent to the Gemini API for analysis.
5. The AI generates structured insights, including scoring and improvement suggestions.
6. The frontend displays the analysis in a user-friendly interface.

## 🔐 Security Notes

- Never commit API keys, passwords, JWT secrets, or `.env` files.
- Store credentials in environment variables.
- Validate uploaded files and handle API errors safely.
- Keep private credentials out of frontend code.

## 🚀 Future Improvements

- Job-description matching for more targeted resume analysis.
- More detailed ATS compatibility insights.
- Resume improvement recommendations tailored to specific roles.
- Enhanced error handling and API reliability.
- Improved user experience and analysis history.

## 👩‍💻 Author

**Masum Dubey**

- GitHub: [@masumdubey91](https://github.com/masumdubey91)
- LinkedIn: [Masum Dubey](https://www.linkedin.com/in/masum-dubey-549815338/)

---

⭐ If you find this project interesting, feel free to explore the repository and share feedback.

*Built as a hands-on project to explore full-stack development and Generative AI integration.*
