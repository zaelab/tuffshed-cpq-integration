import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app
  .use(express.static(path.join(__dirname, "./dist")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
