# E-commerce API

This project is an E-commerce API built using Node.js, Express.js, and MongoDB. It provides endpoints for buyers and sellers to register, login, manage their profiles, and interact with products.

## Features

### Buyer Functionality:
- Registration, login, and logout.
- Update buyer profile information.
- Purchase products from sellers.

### Seller Functionality:
- Registration, login, and logout.
- Update seller profile information.
- Add, update, and delete products.
- View products listed by the seller.

### Authentication:
- Uses JSON Web Tokens (JWT) for buyer and seller authentication.
- Middleware for authenticating buyers and sellers.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and product data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JSON Web Tokens (JWT)**: Token-based authentication mechanism.
- **dotenv**: Environment variable management.

1. Clone the repository: `git clone https://github.com/TusharPachouri/E-commerce-API.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file based on the provided `.env.example` template
   - Update the variables with your MongoDB connection string, Cloudinary credentials, and other necessary configurations
4. Start the application: `npm start`

## API Documentation

### Buyer Routes:

POST /buyer/register: Register a new buyer.
POST /buyer/login: Login as a buyer.
GET /buyer/me: Get buyer profile.
PATCH /buyer/me: Update buyer profile.
DELETE /buyer/me: Delete buyer account.
POST /buyer/logout: Logout buyer.
POST /buyer/buy/:id: Purchase a product by ID.

### Seller Routes:

POST /seller/register: Register a new seller.
POST /seller/login: Login as a seller.
GET /seller/me: Get seller profile.
PATCH /seller/me: Update seller profile.
DELETE /seller/me: Delete seller account.
POST /seller/logout: Logout seller.
POST /seller/product/add: Add a new product.
PATCH /seller/product/:id: Update product by ID.
DELETE /seller/product/:id: Delete product by ID.
GET /seller/products: Get all products listed by the seller.
GET /seller/product/:id: Get details of a specific product.
For detailed API documentation, please refer to the source code.

Contributing
Contributions are welcome! Fork the repository, create a branch, make your changes, and submit a pull request.
