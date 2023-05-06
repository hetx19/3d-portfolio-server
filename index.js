import cloudinary from "cloudinary";
import dotenv from "dotenv";
import colors from "colors";
import connect from "./database/db.js";
import app from "./app.js";

// Configuring Enviroment Variables
dotenv.config();

// Connecting To MongoDB Database
connect();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome To 3d-Portfolio</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Portfolio server is running on ${process.env.MODE} mode at http://localhost:${process.env.PORT}`
      .bgCyan.white
  );
});
