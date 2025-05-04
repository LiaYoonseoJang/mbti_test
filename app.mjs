import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public"))); // if using a /public folder
app.use(express.static(__dirname)); // this already serves result.html, JSON, etc.


// Serve static files from public folders
app.use(express.static(__dirname));

// Route to result.html
app.get("/result", (req, res) => {
  res.sendFile(path.join(__dirname, "result.html"));
});

// Route to test.html
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
