// Load all the environment variables in application
import dotenv from 'dotenv';
dotenv.config();

// Third party modules
import express from 'express';
import cookieParser from 'cookie-parser';

// Internal modules
import { errorHandlerMiddleware } from './src/middlewares/errorHandler.js';
import { invalidRoutesHandlerMiddleware } from './src/middlewares/invalidRoutes.middleware.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import productsRoutes from './src/features/products/routes/products.routes.js';

// Initialisation of express
const app = express();

app.use(express.json());
app.use(cookieParser());

// Logger middleware
app.use(loggerMiddleware);

// Routes for post, user, like, comments
app.use('/products', productsRoutes);

// Invalid Routes Middleware
app.use(invalidRoutesHandlerMiddleware);

// App level Error Handler
app.use(errorHandlerMiddleware);

export default app;