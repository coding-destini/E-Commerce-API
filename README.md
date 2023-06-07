This is a project for building an Ecommerce API using Node.js, Express, MongoDB, and EJS. It includes CRUD operations and file upload functionality using Multer.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: https://nodejs.org/
- MongoDB: https://www.mongodb.com/
- Postman: https://www.postman.com/
- Git: https://git-scm.com/

### Installation

1. Clone the repository: git clone https://github.com/your-username/ecommerce-api.git
2. Navigate to the project directory:cd ecommerce-api
3. Install the dependencies: npm install

### Configuration

1. Create a `.env` file in the project root directory.
2. Add the following environment variables: PORT=3000
MONGODB_URI=<your-mongodb-uri>
 
 


Make sure to replace `<your-mongodb-uri>` with the MongoDB connection URI for your database.

### Usage

1. Start the server: npm start
2. Open Postman or any API testing tool.
3. Send requests to `http://localhost:3000` for the following CRUD operations:

- GET `/products` - Get all products
- GET `/products/:id` - Get a specific product by ID
- POST `/products` - Create a new product
- PUT `/products/:id` - Update a product by ID
- DELETE `/products/:id` - Delete a product by ID

### Frontend

This project uses EJS as the templating engine for the frontend. To customize the frontend templates, navigate to the `views` directory and modify the EJS files according to your requirements.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
