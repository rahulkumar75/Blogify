# Blog App
Blogify is a feature-rich blog management application built using (React, Redux, and Appwrite) that allows users to create, edit, manage, and publish blog posts seamlessly. The project emphasizes scalability, user-friendly design, and efficient content management, providing bloggers with an intuitive platform to share their thoughts and ideas with a broad audience.
# Features:
Key Features:

* User Authentication and Authorization:
  - Implemented secure user authentication using JWT (JSON Web Tokens) and password hashing with bcrypt, allowing users to create accounts, log in, and manage their blog posts securely.
  - Role-based access control was established to distinguish between regular users and admins, ensuring that only authorized personnel could access specific functionalities like user management.
* Post Creation and Editing:
  - Integrated a rich text editor using React Quill, enabling users to create and format blog posts with various styling options, images, and embedded media.
  - Implemented autosave functionality to prevent data loss and enhance the user experience by saving drafts automatically during the editing process.
* Responsive Design and User Interface:
  - Developed a responsive and visually appealing UI using React.js and Tailwind CSS, ensuring a consistent and engaging experience across various devices, including desktops, tablets, and mobile phones.
  - Focused on accessibility and user experience (UX) principles to make the platform intuitive for users of all technical levels.
* Real-Time Content Management:
  - Utilized Redux for state management, allowing for real-time updates and synchronization of content across different parts of the application without page reloads.
  - Enabled users to categorize posts, add tags, and manage blog content efficiently through a clean, organized dashboard.
* Routing:
  - React Router is used for seamless navigation between different pages of the application.
* Component-Based Architecture:
  - The application is built with reusable components, including a Header, Footer, and dynamic content rendering with the Outlet component.
* Error Handling:
  - Includes basic error handling for authentication-related issues.
  
# Getting Started:
1. Clone the Repository
  * git clone (https://github.com/rahulkumar75/Blogify.git)
2. Install Dependencies:
  * npm install
3. Run the Application:
  * npm run dev

# Technologies Used:

* Frontend: React.js, Redux, Tailwind CSS, React Router
* Backend:  Appwrite, Express.js
* Database: MongoDB, Mongoose
* Authentication: JWT, bcrypt
* Tools: Git, GitHub, Visual Studio Code, Postman for API testing



# Libraries Install
- npm install @reduxjs/toolkit
- npm install react-redux
- npm i react-router-dom
- appwrite
- npm i @tinymce/tinymce-react
- npm i html-react-parser
- npm i react-hook-form 

