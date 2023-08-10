import express, { urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swaggerSetup";


export const app = express();

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.use(express.json());

app.use(urlencoded({ extended: true }));