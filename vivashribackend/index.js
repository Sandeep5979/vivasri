import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import cors from "cors";
import adminRouter from "./app/routes/AdminRoutes.js";
import frontRouter from "./app/routes/FrontRoutes.js";
import userRouter from "./app/routes/UserRoutes.js";
import { authJwt } from "./app/middlewares/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { dbConnect } from "./app/config/db.js";
import { swaggerDefinition } from "./swagger/swaggerDef.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

const swaggerOptions = {
  definition: swaggerDefinition,
  apis: ["./swagger/*.swagger.js"],
};
const swaggerUiOptions = {
  explorer: true,
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCss: `
    .swagger-ui .topbar .link span { display: none }
    .swagger-ui .topbar .link:before {
      content: url('http://localhost:3000/assets/img/logo-light.png');
      display: inline-block;
      margin-right: 10px;
    }
  `,
  customSiteTitle: "Vivashri API",
  customfavIcon: "", 
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));


// route start here
/* app.get("/", (req, res) => {
  res.json({ message: "Welcome to akswebsoft." });
});
*/

dbConnect();

app.use("/api/admin", [authJwt.verifyToken],  adminRouter);
app.use("/api/front",   frontRouter);
app.use("/api/user",   userRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});