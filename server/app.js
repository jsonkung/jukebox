import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files built from React
if (NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
    });
}

app.listen(
    PORT,
    console.log(`Server running in ${ NODE_ENV } mode on port ${ PORT }`)
);
