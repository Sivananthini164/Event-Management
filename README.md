01. # 🎉 Event Management System (MERN Stack)

A simple **Event Management System** built using the MERN stack (MongoDB, Express.js, React, Node.js).  
This application allows users to **create, view, update, delete, and search events**.  
It demonstrates full-stack development with REST API integration, validation, and a responsive React frontend.

---

## 🚀 Features
- Add new events with title, description, date, venue, organizer, capacity, and status.
- View a list of events with search and filter options.
- Edit and update existing events.
- Delete events.
- Backend validation with **Joi**.
- Auto-handling of `createdAt` and `updatedAt`.
- Fully responsive UI built with React + Bootstrap.

---

## 🛠️ Technologies Used
- **Frontend:** React, React Router, Axios, Bootstrap  
- **Backend:** Node.js, Express.js, Joi (validation), CORS  
- **Database:** MongoDB (Atlas or local)  
- **Other tools:** Nodemon, dotenv

---

## ⚙️ Setup & Installation

### 1. Clone the repository
git clone https://github.com/your-username/event-management.git
cd Event-Management

02.  Backend Setup
cd backend
npm install

Create a .env file inside backend/:

PORT=5000
MONGO_URI=MONGO_URI = mongodb+srv://Gamage_Recruiters:1234@gamagerecruiters.9gtre0a.mongodb.net/?retryWrites=true&w=majority&appName=GamageRecruiters


Start backend:

npm run dev

3. Frontend Setup
cd ../client
npm install


Create a .env file inside client/:

REACT_APP_API_URL=http://localhost:5000/api


Start frontend:

npm start

4. Access Application

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/events

📡 API Endpoints
Method	Endpoint	Description	Request Body Example
GET	/api/events	Get all events (with ?q or ?date filters)	–
GET	/api/events/:id	Get a single event by ID	–
POST	/api/events	Create a new event	{ "title": "Annual Meetup", "date": "2025-09-15", "Venue": "Colombo" , "capacity": 100, "status": "draft" }
PUT	/api/events/:id	Update an existing event	Same as POST body
DELETE	/api/events/:id	Delete an event	–
📸 Screenshots
Event List Page

Create Event Page

Edit Event Page



🧩 Challenges Faced & Solutions

MongoDB Connection Issue

Problem: .env variable mismatch (MONGO_URL vs MONGO_URI).

Solution: Unified naming across .env and server.js.

React Infinite Render (Maximum update depth exceeded)

Problem: useEffect caused infinite loop when setting form state.

Solution: Added condition Object.keys(initialData).length > 0 before updating state.

Controlled vs Uncontrolled Input Warning

Problem: Some inputs switched between undefined and string.

Solution: Provided default empty string "" for all form fields.

Field Mismatch (Venue vs Location)

Problem: Frontend used venue, backend used location.

Solution: Renamed consistently to location in DB, kept "Venue" only as UI label.

📌 Future Improvements

User authentication (login, register).

Event RSVP/registration system.

Deployment to Vercel (frontend) and Render/Heroku (backend).

👨‍💻 Author

Developed by Sivananthini Ravichandran as part of the Software Engineering Assignment.
