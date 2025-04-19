# ⭐ E-commerce Follow Along Project ⭐

Welcome to the **Ecommerce Follow Along Project**, this is a hands-on project where we will build a complete e-commerce application using the MERN stack (Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## ⭐ Milestone 1: Project Overview

### 🌟 M1. Understanding the MERN Stack
- **MongoDB**: A database for storing application data in a flexible, document-based format.
- **Express.js**: A backend web application framework for building APIs and handling server logic.
- **React.js**: A framework/library for building user interfaces.
- **Node.js**: A runtime environment that allows JavaScript to run on the server.

### 🌟 M2. REST API Structure
REST APIs are used to allow communication between the frontend and backend. We'll create APIs for:
- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders.

### 🌟 M3. Database Schema Design
- We'll learn how to design and organize data using MongoDB.
- A schema helps us define how the data is stored and related.

### 🌟 M4. Authentication
Authentication ensures only the right people can access certain features. For example:
- Users need to log in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.

## 🌟 Milestone 2: Project Setup and Login Page Development

In this milestone, we set up the foundational structure for the project and implemented the first user-facing feature: the Login Page. Here's what we completed:

### 🌟 1. Project Folder Structure
We organized the project into two separate directories:
- Frontend: Where the React app lives.
- Backend: Where the Node.js/Express backend resides.

This structure will make it easier to manage the frontend and backend code separately as the project grows.

### 🌟 2. React Frontend Setup
We initialized a new React application to build the user interface. This app will be the foundation for all the user-facing features of the e-commerce platform.

### 🌟 3. Node.js Backend Setup
We set up a simple Node.js server using Express to handle requests and API routes. This server will eventually power the various features, like user authentication, product management, and order processing.

### 🌟 4. Tailwind CSS Configuration
Tailwind CSS was configured to enable a utility-first styling approach for rapid and responsive design. This allows us to quickly style components without writing custom CSS.

### 🌟 5. Login Page Development
The main feature developed in this milestone is the Login Page:
- A functional login form where users can enter their credentials to authenticate.
- Responsive and styled using Tailwind CSS to ensure a modern user experience.

## 🌟 Milestone 3:

Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

## 🌟  Milestone 4

created a User Model to define how user data is structured in the database also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

## 🌟  Milestone 5: 
In this milestone, I built the Sign-Up page for user registration using HTML and CSS. I implemented form validation to ensure valid inputs, like email format and password security. This enhances user experience and prevents errors. All changes have been committed and pushed to the repository.  

## 🌟 Milestone 6 - 
In this milestone, I created a backend signup API that securely stores user data. Passwords are encrypted using bcrypt before saving to MongoDB. The API ensures secure user authentication and data privacy. All changes are committed and pushed.

## 🌟  Milestone 7 
In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data. 🚀

## 🌟  Milestone 8
In this milestone, we created a reusable product card component and designed a homepage to display multiple cards dynamically. The component receives product details as props and is rendered using array mapping. This improves UI consistency, enhances user experience, and maintains an organized layout for showcasing products effectively. 🚀

## 🌟  Milestone 9
In this milestone, we created a product page for the e-commerce website. The page displays a list of products with their details, including images, names, descriptions, and prices. Users can click on a product to view more information or add it to their cart. This page provides a user-friendly interface for browsing and selecting products.

## 🌟  Milestone 10
In this milestone, we created an API to allow product creation with image uploads using Multer. The images are stored in the uploads/ directory, and product data, including image paths, is saved to MongoDB for efficient storage and retrieval.

## 🌟  Milestone 11
In this milestone, we successfully fetched real-time product data from the backend and displayed it dynamically on the homepage. Additionally, we implemented an automatic image slider for each product, allowing multiple images to cycle every 3 seconds. This enhances user engagement and provides a more interactive browsing experience.

## 🌟 Milestone 12: 
In this milestone, we implemented a ByProduct Page that displays products created by a specific email ID, while the Home Page continues to show all products.

## 🌟 Milestone 13: 
In this milestone, we implemented the Update Product functionality, allowing users to edit product details. The update form dynamically loads the product's existing data, and changes are submitted via an API call. This ensures that users can modify product information easily while maintaining data integrity.

## 🌟 Milestone 14: 
This milestone focused on integrating the Delete Product functionality, allowing users to remove products permanently. A confirmation prompt ensures accidental deletions are avoided

## 🌟 Milestone 15: 
Implement a responsive navigation bar using React and Tailwind CSS to enable smooth navigation between different pages in the application.

## 🌟 Milestone 16: 
In this milestone, we create a product details page displaying all product data, including description, category, price, and tags, with quantity selection and an Add to Cart button. 🚀

## 🌟 Milestone 17: 
In this milestone, we implemented the backend functionality to add products to a cart and store them in the database. This feature allows users to add products to their cart, which persists in the database for future access.

## 🌟 Milestone 18: 
In this milestone, we implemented the backend functionality to add products to the user's cart and store them in the database.

## 🌟 Milestone 19: 
In this milestone, we create an frontend page UI for cart and write an endpoint to increase and decrease the quantity of product inside cart

## 🌟 Milestone 20: 
In this milestone, we will profile page frontend and write an endpoint to receive user data and display.

## 🌟 Milestone 21: 
In this milestone, we will create a front-end page form for address input.

## 🌟 Milestone 22: 
In this milestone, we will create a backend endpoint that will save the address inside the user profile in the database.

## 🌟 Milestone 23: 
In this milestone, we will make our create a select address page in front end and we will write product schema for the orders in the backend.

## 🌟 Milestone 24: 
In this milestone ,  we will make our create an order conformation page in frontend where will display products ordering and address selected and total price details.

## ⭐ Milestone 25: Store Order Details in Database
Created an API endpoint to receive product, user, and address details.
Retrieved the _id of the user using their email.
For each product, an individual order was created with the same address.
Stored order details in MongoDB using the existing order schema.

## ⭐ Milestone 26: Retrieve User Orders
Created an API endpoint to receive the user's email.
Retrieved the _id of the user using their email.
Fetched all orders related to that user using their _id.
Sent the user's order history in the response.

## ⭐ Milestone 27: Create My Orders Page
Learning Goals 🎯
By the end of this milestone, you will:

Create a frontend page that will display all the user orders.
Steps for Milestone 27 📝
Create a My Orders page.
Send a GET request to the my-orders endpoint created in the previous milestone.
Pass the user's email to the endpoint to fetch all user orders.
Display all the retrieved user orders on the page.
Add the My Orders page to the navbar for better navigation.

## ⭐ Milestone 28: Cancel Order Feature
Learning Goals 🎯
By the end of this milestone, you will:

Allow users to cancel their placed orders.
Steps for Milestone 28 📝
In the My Orders page, add a "Cancel Order" button for each order.
If an order is already canceled, the button should not be displayed.
Create an API endpoint that will receive the order_id.
Fetch the order using this order_id, update its status to "Canceled", and save the changes.

## ⭐ Milestone 29:
In this Milestone, we will learn how to add an online payment gateway to our application using Paypal API.

## ⭐ Milestone 30:
In this Milestone,  we will learn how to add an online payment gateway to our application using PayPal API. This is a continuous milestone of milestone 29 where you create a PayPal account and get the user ID.

## ⭐ Milestone 31:
In this Milestone, we will learn how to implement global state management using Redux.

## ⭐ Milestone 32:
In this Milestone, we will add the mail to the global state we created earlier and access the mail on all pages.

## ⭐ Milestone 33:
In this Milestone, we will learn how to create and store a JWT token inside a cookie.
