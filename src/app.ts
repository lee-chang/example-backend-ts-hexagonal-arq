// import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
// import { router } from "./routes";

import dbConnect from "./config/db";

const app: Express = express();

app.use(helmet());

app.use(morgan("dev"));
// app.use(cookieParser());
app.use(express.json());

// * CORS Config

const whitelist = ["http://localhost:8080", "http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
	credentials: true,
	origin: (origin, callback) => {
		const init = origin || "";

		if (whitelist.indexOf(init) !== -1 || !init) {
			callback(null, true);
		} else {
			callback(new Error("NOT ALLOWED BY CORS"));
		}
	},
};

app.options("*", cors(corsOptions));
app.use(cors());

// * Content Type Config
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// app.use(router);

dbConnect();

export default app;
