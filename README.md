# Library Management Application

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Setup](#setup)


## Features

- Manage books.
- Manage users.
- Borrow and return books with tracking.
- Calculate book ratings based on user scores.

## Technologies

- **TypeScript**: Provides type safety and modern JavaScript features.
- **Express**: Framework for building RESTful APIs.
- **MySQL**: Database system for storing data.
- **Knex.js**: SQL query builder for managing migrations and interactions with the database.
- **Objection.js**: SQL-friendly ORM for handling models and relations.
- **and more...**

## Setup

### Prerequisites

- Node.js
- MySQL server

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/salurs/library_app.git
    cd library_app
2. Install dependencies:

   ```bash
    npm install
3. Configure your environment variables by creating a .env file in the root directory:

   ```bash
   PORT=3000
   NODE_ENV=development
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name

3. Run migrations to set up the database schema:

   ```bash
    npm run migrate

3. (Optional) Seed the database with initial data:

   ```bash
    npm run seed

