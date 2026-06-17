# AI Resume Analyzer

## Project Overview

AI Resume Analyzer is a full stack MERN project that allows users to:

- register and log in
- upload resumes
- parse resume PDF files
- calculate ATS scores
- compare skills with job requirements
- view previous analysis history

This project will be built step by step so that each part is easy to understand before moving to the next feature.

## Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- JWT
- bcryptjs

### File Upload and Parsing

- Multer
- pdf-parse

## Day 1 Objective

Today we are only preparing the project foundation.

That means:

- defining what the project will do
- creating a clean folder structure
- adding a `.gitignore` file so unnecessary files are not committed

## Folder Structure

```text
AI Resume Analyzer/
|-- backend/
|-- frontend/
|-- .gitignore
|-- README.md
```

## Why This Structure Matters

We are separating the project into two main parts:

- `backend` will hold our API, database connection, authentication, and resume analysis logic
- `frontend` will hold our React user interface

This separation is common in MERN projects because it keeps responsibilities clear and makes development easier to manage.

## Development Roadmap

### Backend phase

1. initialize the backend project
2. create the Express server
3. connect MongoDB
4. build user model
5. create authentication APIs
6. protect private routes
7. add resume upload and parsing
8. build analysis logic
9. save history

### Frontend phase

1. initialize the React app
2. add routing
3. create authentication pages
4. connect frontend with backend APIs
5. build dashboard
6. add resume upload page
7. show analysis results and history

## Notes for Future Days

- We will not mix backend and frontend logic in one folder.
- We will build the backend first because the frontend depends on working APIs.
- We will keep the code beginner friendly and explain each step before moving forward.
