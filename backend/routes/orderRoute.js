import express from "express";
import authMiddleware from '../middleware/auth.js';
import { placeOrder, userOrders, verifyOrder, listOrders, updateStatus } from "../controller/orderController.js";

const orderRouter = express.Router();

/**
 * Route to place a new order.
 * @name POST /order/place
 * @function
 * @memberof module:routes/orderRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
orderRouter.post("/place", authMiddleware, placeOrder);

/**
 * Route to verify an order.
 * @name POST /order/verify
 * @function
 * @memberof module:routes/orderRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
orderRouter.post("/verify", verifyOrder);

/**
 * Route to get orders placed by a user.
 * @name POST /order/userorders
 * @function
 * @memberof module:routes/orderRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
orderRouter.post("/userorders", authMiddleware, userOrders);

/**
 * Route to list all orders.
 * @name GET /order/list
 * @function
 * @memberof module:routes/orderRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
orderRouter.get('/list', listOrders);

/**
 * Route to update the status of an order.
 * @name POST /order/status
 * @function
 * @memberof module:routes/orderRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
orderRouter.post('/status', updateStatus);

export default orderRouter;
