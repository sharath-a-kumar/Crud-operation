import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // Correct import path
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import { loginUser } from "./controller/userController.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = 4000;

// middleware 
app.use(express.json());
app.use(cors());

// db connection 
connectDB();


// api endpints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


// define routes
app.get("/", (req, res) => {
    res.send("API WORKING");
});

// listen
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});


// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import 'dotenv/config.js';
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// /**
//  * Express application instance.
//  * @type {express.Application}
//  */
// const app = express();

// /**
//  * Port for the server to listen on.
//  * @type {number}
//  */
// const port = 4000;

// // middleware
// app.use(express.json());
// app.use(cors());

// /**
//  * Connect to the database.
//  * @function
//  */
// connectDB();

// // api endpoints
// /**
//  * Food API routes.
//  * @name /api/food
//  * @memberof module:app
//  * @function
//  */
// app.use("/api/food", foodRouter);

// /**
//  * Static file serving for uploaded images.
//  * @name /images
//  * @memberof module:app
//  * @function
//  */
// app.use("/images", express.static('uploads'));

// /**
//  * User API routes.
//  * @name /api/user
//  * @memberof module:app
//  * @function
//  */
// app.use("/api/user", userRouter);

// /**
//  * Cart API routes.
//  * @name /api/cart
//  * @memberof module:app
//  * @function
//  */
// app.use("/api/cart", cartRouter);

// /**
//  * Order API routes.
//  * @name /api/order
//  * @memberof module:app
//  * @function
//  */
// app.use("/api/order", orderRouter);

// /**
//  * Route serving a test message.
//  * @name GET /
//  * @memberof module:app
//  * @function
//  * @param {express.Request} req - Express request object.
//  * @param {express.Response} res - Express response object.
//  * @returns {void}
//  */
// app.get("/", (req, res) => {
//     res.send("API WORKING");
// });

// /**
//  * Start the server and listen on the specified port.
//  * @function
//  * @memberof module:app
//  * @param {number} port - Port number to listen on.
//  * @returns {void}
//  */
// app.listen(port, () => {
//     console.log(`Server Started on http://localhost:${port}`);
// });

