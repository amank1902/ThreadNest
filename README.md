# ThreadNest

<p>A full-stack social media application inspired by Threads, built with React.js on the frontend and Node.js/Express on the backend. It provides robust features such as user authentication, profile management, and post interactions, leveraging modern web technologies and cloud-based image storage.</p>

## Features

### Authentication
<ul>
  <li>User registration and login functionality.</li>
  <li>Password encryption with <strong>bcrypt</strong>.</li>
  <li>Token-based authentication using <strong>JWT</strong>, with session persistence via cookies.</li>
</ul>

### Post Creation and Interaction
<ul>
  <li>Users can create, update, and delete posts.</li>
  <li>Functionality to like and reply to posts.</li>
</ul>

### User Engagement
<ul>
  <li>Follow and unfollow other users.</li>
  <li>Engage with other users' content through likes and replies.</li>
</ul>

### Profile Management
<ul>
  <li>Editable user profiles, allowing changes to bio and other personal details.</li>
  <li>Integration with <strong>Cloudinary</strong> for efficient profile picture uploads and management.</li>
</ul>

## Tech Stack

### Frontend:
<ul>
  <li><strong>React.js</strong> for building the user interface.</li>
  <li><strong>Recoil</strong> for state management, providing an efficient and scalable way to manage global state.</li>
  <li><strong>Axios</strong> for handling HTTP requests.</li>
  <li><strong>React Router</strong> for managing client-side routing.</li>
</ul>

### Backend:
<ul>
  <li><strong>Node.js</strong> and <strong>Express.js</strong> for API development and server-side logic.</li>
  <li><strong>MongoDB</strong> with <strong>Mongoose</strong> for data persistence.</li>
  <li><strong>JSON Web Tokens (JWT)</strong> for secure authentication and authorization.</li>
  <li><strong>Bcrypt</strong> for password hashing and security.</li>
</ul>

### Cloudinary:
<ul>
  <li>Utilized for image storage and delivery, specifically for handling profile picture uploads.</li>
</ul>

## Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   bash
   git clone https://github.com/amank1902/ThreadNest.git
   

2. Navigate to the project directory:
   bash
   cd ThreadNest
   

3. Install dependencies:
   bash
   npm install
   

4. Configure environment variables:
   Create a .env file and add:
   env
     PORT=your_port_number
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   

5. Start the development server:
   bash
   npm run dev
   

6. Open your browser and navigate to:
   ```
   http://localhost:3000
