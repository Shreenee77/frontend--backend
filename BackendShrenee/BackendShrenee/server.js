import express from "express";
import ConnectDb from "./lib/db.js";
import dotenv from "dotenv";
import cors from "cors";
import RouterReport from "./routes/report.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3007;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDb();

app.get("/api", (req, res) => {
    res.json({ msg: "Health Checking API" });
});

app.use("/api/report/shrenee", RouterReport);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
