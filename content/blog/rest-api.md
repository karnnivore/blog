---
title: Building a REST API with Node.js and Express
description: Learn how to build a simple REST API using Node.js and Express.
date: 2024-10-23
published: true
---

# Building a REST API with Node.js and Express

In this tutorial, you'll learn how to build a simple RESTful API using **Node.js** and **Express**. We'll cover everything from setting up a basic server to handling HTTP requests, creating routes, and managing a simple data store.

---

## Why Build a REST API?

REST (Representational State Transfer) is an architectural style that allows communication between different systems over HTTP. It's one of the most common approaches to designing APIs. By the end of this tutorial, you’ll have a working REST API that you can expand upon in your own projects.

---

### Prerequisites

Before starting, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Postman](https://www.postman.com/) or any other API testing tool
- Basic understanding of JavaScript

---

## Step 1: Setting Up the Project

1. First, create a new directory for your project and navigate into it:

  ```bash
  mkdir rest-api-example
  cd rest-api-example
  ```

2. Initialize a new Node.js project using `npm init`:

  ```bash
  npm init -y
  ```

3. Install **Express** as a dependency:

  ```bash
  npm install express
  ```

---

## Step 2: Creating the Server

Create a new file named `server.js` in your project directory and add the following code:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

This code sets up a basic Express server that listens on port 3000 (or the port specified in the environment variable `PORT`). When you run the server, you should see the message "Server is running on port 3000" in the console.

---

## Step 3: Handling Routes

Let's create a simple route to handle GET requests to `/api/users`. Add the following code to `server.js`:

```javascript
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});
```

This code defines a route that responds with a JSON array of users when a GET request is made to `/api/users`.

---

## Step 4: Running the Server

To start the server, run the following command in your terminal:

```bash
node server.js
```

You should see the message "Server is running on port 3000". Open your browser and navigate to `http://localhost:3000/api/users` to see the list of users.

---

## Conclusion

Congratulations! You've successfully built a simple REST API using Node.js and Express. This is just the beginning – you can expand this API by adding more routes, handling different HTTP methods, and connecting it to a database.