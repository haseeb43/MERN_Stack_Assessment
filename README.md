# MERN-Assessment

![Node.js]
![Express]
![JWT]

 This repository contains a production-ready the backend server and frontend application for a basic MERN Stack Blog Posting.  
 
 Back-end is built with Node.js and Express and MongoDB for Database.

 Front-end is built with Reactjs. 


## Features

- **Authentication Handling:** Uses JWT for auth.
- **Error Management:**.



## API Documentation


### Backend Server
- Base URL: [http://localhost:5000](http://localhost:5000)

### Frontend Server
- Base URL: [http://localhost:3000](http://localhost:3000)

## Prerequisites

- Node.js
- Express
- React.js
- JSON Web Token (JWT)
- MongoDB

## Environment Variables

```bash
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret 
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/haseeb43/MERN_Stack_Assessment.git
   ```

2. **Install dependencies:**

   ```bash
   cd MERN_Stack_Assessment
   ```
   ```bash
   npm install
   ```

   Install Front-end dependencies.
   ```bash
   cd frontend
   ```

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the environment variables listed above.

4. **Run the server:**

    Execute following command in the root directory of the project.  

   ```bash
   npm run app
   ```

   The back-end server will be running at [http://localhost:5000](http://localhost:5000) or the specified port in your `.env` file.

   The front-end server will be running at [http://localhost:3000](http://localhost:3000).


## Dependencies

- See back-end [package.json] for a detailed list of dependencies.

