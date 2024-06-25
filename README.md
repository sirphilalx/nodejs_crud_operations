# Node.js Basic Product CRUD Application

Welcome to the Node.js Basic Product CRUD application! This application provides a basic setup for performing CRUD operations on products using Node.js, Express.js, MongoDB, and Mongoose.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [License](#license)

## Introduction

This project implements a Node.js CRUD (Create, Read, Update, Delete) application for managing products. It uses Express.js as the web framework, MongoDB as the database, and Mongoose for data modeling. The application provides API endpoints to interact with products, allowing operations such as creating new products, retrieving products, updating existing products, and deleting products.

## Features

- **Create Product**: Add a new product to the database with details like name, quantity, price, and optional image.
- **Fetch Products**: Retrieve a list of all products stored in the database.
- **Fetch Single Product**: Get details of a specific product by its unique ID.
- **Update Product**: Modify details of an existing product based on its ID.
- **Delete Product**: Remove a product from the database using its ID.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd nodepractice
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/node-api
   ```

   Adjust `MONGODB_URI` as per your MongoDB configuration.

4. **Start the server**:
   ```bash
   npm run dev
   ```
   This will start the server using nodemon for automatic restarts on file changes.

## Usage

Once the server is running, you can interact with the API endpoints using tools like Postman or curl. Here are some example requests:

- **Create a Product**:

  ```bash
  POST http://localhost:8080/api/products
  Body: {
    "name": "Sample Product",
    "quantity": 10,
    "price": 29.99,
    "image": "sample-image-url"
  }
  ```

- **Fetch All Products**:

  ```bash
  GET http://localhost:8080/api/products
  ```

- **Fetch a Single Product**:

  ```bash
  GET http://localhost:8080/api/products/:id
  ```

- **Update a Product**:

  ```bash
  PUT http://localhost:8080/api/products/:id
  Body: {
    "name": "Updated Product Name",
    "quantity": 15,
    "price": 39.99,
    "image": "updated-image-url"
  }
  ```

- **Delete a Product**:
  ```bash
  DELETE http://localhost:8080/api/products/:id
  ```

## API Endpoints

- `POST /api/products`: Create a new product.
- `GET /api/products`: Retrieve all products.
- `GET /api/products/:id`: Retrieve a single product by ID.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

## Database Schema

The `Product` schema in MongoDB:

```javascript
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
```

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: MongoDB object modeling for Node.js.
- **dotenv**: Environment variable management.

## Scripts

- `npm run serve`: Start the server using `node`.
- `npm run dev`: Start the server using `nodemon` for automatic restarts on file changes.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.
