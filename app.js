import express, { Router } from "express";
import "dotenv/config";
import path from "path";
import hbs from "hbs";
import morgan from "morgan";
import methodOverride from "method-override";
import { fileURLToPath } from "url";
import { router } from "./src/routes/tareasRouters.js";
import "./src/db/conexion.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "src/public")));


app.set("views engine", ".hbs");
app.set("views", path.join(__dirname, "src/views"));
hbs.registerPartials(path.join(__dirname, "src/views/partials"));


app.use(router);

app.listen(PORT, () => {
  console.log(`saliendo en el puerto ${PORT}`);
});
