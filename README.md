(Due to technical issues, the search service is temporarily unavailable.)

# 🛍️ E-Commerce RESTful API

A robust and scalable backend solution for modern e-commerce platforms, built with Node.js, Express, and MongoDB. This API powers essential e-commerce operations including product management, order processing, payments, and user authentication.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)](https://www.mongodb.com/)

## 🌟 Key Features
- **Secure Authentication**: JWT-based auth system with role-based access control (User/Admin/Manager)
- **Payment Integration**: Stripe checkout system with webhook support
- **Advanced Product Management**: 
  - Multi-image upload with Sharp processing
  - Inventory tracking & sales analytics
  - Product reviews/ratings system
- **Order Processing**: 
  - Cart management with coupon support
  - Order tracking (paid/delivered statuses)
- **Security**:
  - Rate limiting (100 req/15min)
  - HTTP Parameter Pollution protection
  - Secure headers with CORS
- **Developer Friendly**:
  - API documentation with Postman
  - Error handling middleware
  - Request validation system
  - Seeding script with dummy data

## 🛠 Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, bcryptjs
- **Payments**: Stripe API
- **Image Processing**: Sharp, Multer
- **Validation**: express-validator
- **Security**: helmet, hpp, express-rate-limit
- **Email**: Nodemailer

## 🚀 Installation
1. Clone repo:
```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment (.env):
```env
DB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET_KEY=your_jwt_secret
STRIPE_SECRET=your_stripe_key
EMAIL_USER=your@email.com
EMAIL_PASSWORD=your_email_password
```

4. Start server:
```bash
npm run start:dev  # Development
npm start          # Production
```

## 📚 API Endpoints
| Category       | Endpoints                     | Methods | Access      |
|----------------|-------------------------------|---------|-------------|
| Authentication | `/api/v1/auth/*`              | POST    | Public      |
| Products       | `/api/v1/products`            | CRUD    | Public/Admin|
| Orders         | `/api/v1/orders`              | CRUD    | User/Admin  |
| Users          | `/api/v1/users`               | CRUD    | Admin       |
| Carts          | `/api/v1/cart`                | CRUD    | User        |
| Payments       | `/api/v1/orders/checkout-session` | POST | User    |
