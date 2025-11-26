<<<<<<< HEAD
# CleanBangla — Community Issue Reporting (Client)

**CleanBangla** is a community-driven issue reporting frontend built with React, Vite, Tailwind CSS and Firebase. It allows community members to report problems (garbage, illegal construction, broken public property, road damage), view issue details, contribute funds, and manage their own reports.

Live site: https://cleanbengali.web.app/

---

## 1. Project name and short description

- **Project name:** CleanBangla (Client)
- **Short description:** A responsive React client for reporting and tracking community issues, with Firebase authentication and a simple contributions workflow.

---

## 2. Live link

- Production / demo: https://cleanbengali.web.app/

---

## 3. Tech stack

- Frontend: React (Vite)
- Styling: Tailwind CSS + DaisyUI
- Authentication: Firebase Authentication
- HTTP client: Axios (wrapped by `useAxiosSecure`)
- Animations: AOS / GSAP
- Icons: react-icons

---

## 4. Features

- Firebase-based authentication (signup, login, reset password)
- Report new issues (title, category, location, description, suggested budget)
- Issue details page with photo, meta information and a contributions progress bar
- Contribute funds to an issue via contribution form
- User dashboard: My Issues and My Contributions (protected routes)
- Responsive and accessible UI with modals and forms

---

## 5. Installation and setup

Prerequisites: Node.js (v16+), npm or yarn, a Firebase project for Authentication.

1. Clone the repo

```bash
git clone https://github.com/siddikur-dev/CleanBangla-Client.git
cd CleanBangla-Client
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure Firebase

- Update `src/Firebase/Firebase.config.js` with your Firebase config (apiKey, authDomain, etc.).
- Enable the required Authentication providers in the Firebase console.

4. (Optional) Environment variables

- If you use env variables for API base URL or keys, create a `.env` with values prefixed by `VITE_` and reference them in the code.

5. Start development server

```bash
npm run dev
# or
yarn dev
```

6. Build

```bash
npm run build
# or
yarn build
```

---

## 6. Project folder structure

```
src/
├─ Component/         # Reusable components (Navbar, Footer, Shared)
├─ Pages/             # Route pages (Home, IssueDetails, AddIssue, MyIssues, ...)
├─ Firebase/          # Firebase config
├─ Provider/          # Auth providers / contexts
├─ Routes/            # Router configuration
├─ hook/              # Custom hooks (useAuth, useAxiosSecure)
├─ assets/            # Images and static assets
└─ main.jsx           # App bootstrap
```

---

## 7. API endpoints (frontend expectations)

The client expects a backend with endpoints similar to the following (adjust to your backend):

- `GET /all-issues` — list all issues
- `GET /all-issues/:id` — get issue by id
- `POST /all-issues` — create a new issue
- `GET /recent-issues` — list recent issues (used by UI)
- `GET /all-contributions/:issueId` — list contributions for an issue
- `POST /all-contributions` — create a contribution
- `GET /my-issues?email={email}` — list issues for a user
- `PUT /my-issues/:id` — update a user's issue
- `DELETE /my-issues/:id` — delete a user's issue

Make sure the backend uses the same id field name (e.g., `_id`) that the client expects.

---

## 8. Website screenshots (optional)

Place screenshots in `public/screenshots/` and reference them here. Example:

```md
![Home page screenshot](public/screenshots/home.png)
```

---

## 9. Author / Contact

- **Author:** siddikur-dev
- **Repo:** https://github.com/siddikur-dev/CleanBangla-Client
- **Contact:** add your email or profile link here

---

## 10. Acknowledgments / Credits

- Built with React, Vite, Tailwind CSS and Firebase
- UI components use DaisyUI
- Icons from `react-icons`

---

If you'd like, I can also add:

- Badges (build / license / version) at the top
- `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` templates
- Example screenshots inside `public/screenshots/`

---

License: Add your preferred license (e.g., MIT) if applicable.
=======
# 🌱 CleanBangla – Community Issue Reporting Platform

<p align="center">
  <img src="https://i.ibb.co.com/7tvgg4wr/ZNu-Z2he-Tlu-FMf53h-GHmw.png" alt="CleanBangla Responsive Preview" />
</p>

**CleanBangla** is a community-driven web application that enables citizens to report and track local environmental and civic issues such as garbage dumping, illegal construction, broken infrastructure, road damage, and other municipal challenges. Built with **React, Vite, Tailwind CSS, Node.js, Express, MongoDB, and Firebase Auth**, it encourages transparency, accountability, and real community participation.

---

## 🚀 Features

- Report community issues with full details & category  
- View all reports with filters & status badges  
- Issue details page with timestamps and metadata  
- **User authentication via Firebase (Login / Register)**  
- Personal dashboard to track submitted issues  
- Fully responsive UI using **Tailwind CSS & DaisyUI**  
- Smooth animations with **GSAP**  
- Clean, modern, and scalable folder structure  
- Optimized for speed and user experience  

---

## 🛠 Tech Stack

### **Frontend**
- **React 19** – UI library  
- **Vite** – Fast build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **DaisyUI** – Tailwind CSS Component library  
- **React Router** – Client-side routing  
- **React Icons** – Icon library  
- **GSAP** – UI animations  

### **Backend**
- **Node.js** – Server runtime  
- **Express.js** – Backend web framework  
- **MongoDB** – NoSQL database  

### **Authentication**
- **Firebase Authentication**  

### **Utilities & Supporting Libraries**
- Axios  
- SweetAlert2  
- React Icons  


---

## 📦 Installation & Setup

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/siddikur-dev/CleanBangla-Client.git
cd cleanbangla-frontend
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
```bash
VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```
### 4️⃣ Run Development Server
```bash
npm run dev
```
### 5️⃣ Open in Browser
```bash
http://localhost:5173
```

### 🌍 Live Links
- **Live Site**: https://cleanbengali.web.app
- **Frontend Repo**: https://github.com/siddikur-dev/CleanBangla-Client
- **Backend Repo**: https://github.com/siddikur-dev/CleanBangla-Server



>>>>>>> e04838bbf64bc511626cabfbf2d8df67c35352fb
