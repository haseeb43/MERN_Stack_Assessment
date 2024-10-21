# MERN Stack Interview Task

## Task: Create a Simple Blog Post Application with Role-Based Authentication

### Overview
You are required to create a simple blog post application using the MERN stack. The application should allow users to create, read, update, and delete blog posts. Additionally, implement role-based authentication to control access to certain API endpoints.

### Requirements
1. **Backend (Node.js and Express)**
    - Set up a basic Express server.
    - Create a MongoDB schema for a `User` with the following fields:
        - `username` (string, required)
        - `password` (string, required)
        - `role` (string, required, enum: ['admin', 'user'])
    - Create a MongoDB schema for a `Post` with the following fields:
        - `title` (string, required)
        - `content` (string, required)
        - `author` (string, required)
        - `createdAt` (date, default: Date.now)
    - Implement the following API endpoints:
        - `POST /register` - Register a new user.
        - `POST /login` - Log in an existing user and return a JWT token.
        - `GET /posts` - Retrieve all blog posts.
        - `GET /posts/:id` - Retrieve a single blog post by ID.
        - `POST /posts` - Create a new blog post (restricted to 'admin' role).
        - `PUT /posts/:id` - Update an existing blog post by ID (restricted to 'admin' role).
        - `DELETE /posts/:id` - Delete a blog post by ID (restricted to 'admin' role).

2. **Frontend (React)**
    - Set up a basic React application.
    - Create components for the following views:
        - List of all blog posts.
        - View a single blog post.
        - Form to create a new blog post (restricted to 'admin' role).
        - Form to update an existing blog post (restricted to 'admin' role).
        - Login and registration forms.
    - Use Axios (or fetch) to communicate with the backend API.

### Instructions
1. **Setting Up the Project**
    - Set up the project structure for both the backend and frontend.
    - Ensure the backend server is running on port 5000 and the frontend on port 3000.

2. **Implementing the Backend**
    - Define the `User` and `Post` schemas using Mongoose.
    - Implement JWT-based authentication.
    - Create middleware to check for JWT token and user role.
    - Implement the required API endpoints with role-based access control.
    - Test the endpoints using Postman or a similar tool.

3. **Implementing the Frontend**
    - Create forms for user registration and login.
    - Store the JWT token on successful login and use it for authenticated requests.
    - Create a form to submit new blog posts (visible only to 'admin' users).
    - Display a list of blog posts on the main page.
    - Create a detail view for individual blog posts.
    - Implement functionality to update and delete blog posts (accessible only to 'admin' users).

### Deliverables
- A GitHub repository with the complete code for both the backend and frontend.
- A `README.md` file with instructions on how to run the application.
- Ensure code quality and proper use of Git for version control.

### Evaluation Criteria
- Correctness and completeness of the implementation.
- Code quality and organization.
- Proper use of React, Express, and Mongoose best practices.
- Ability to create a functional and responsive UI.
- Proper error handling and validation.
- Implementation of role-based authentication and authorization.

Good luck!
