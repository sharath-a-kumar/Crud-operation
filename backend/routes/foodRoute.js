import express from "express";
import { addFood, listFood, removeFood, updateFood } from '../controller/foodController.js';
import multer from "multer";

const foodRouter = express.Router();

/**
 * Multer storage configuration for image uploads.
 * @type {multer.StorageEngine}
 */
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        /**
         * Set the file name for the uploaded file.
         * @param {Error|null} error - The error if any occurred.
         * @param {string} filename - The name of the file.
         */
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

/**
 * Middleware for handling file uploads using Multer.
 * @type {multer.Multer}
 */
const upload = multer({ storage: storage });

/**
 * Route to add a new food item.
 * @name POST /food/add
 * @function
 * @memberof module:routes/foodRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
foodRouter.post("/add", upload.single("image"), addFood);

/**
 * Route to list all food items.
 * @name GET /food/list
 * @function
 * @memberof module:routes/foodRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
foodRouter.get("/list", listFood);

/**
 * Route to remove a food item.
 * @name POST /food/remove
 * @function
 * @memberof module:routes/foodRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
foodRouter.post("/remove", removeFood);

/**
 * Route to update a food item.
 * @name POST /food/update
 * @function
 * @memberof module:routes/foodRouter
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {void}
 */
foodRouter.post("/update", upload.single("image"), updateFood);

export default foodRouter;




// import express from "express";
// import { addFood, listFood, removeFood, updateFood } from '../controller/foodController.js';
// import multer from "multer";

// const foodRouter = express.Router();

// // Multer storage configuration for image uploads
// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}${file.originalname}`);
//     }
// });

// // Middleware for handling file uploads using Multer
// const upload = multer({ storage: storage });

// // Route to add a new food item
// foodRouter.post("/add", upload.single("image"), addFood);

// // Route to list all food items
// foodRouter.get("/list", listFood);

// // Route to remove a food item
// foodRouter.post("/remove", removeFood);

// // Route to update a food item
// foodRouter.post("/update", upload.single("image"), updateFood);

// export default foodRouter;
