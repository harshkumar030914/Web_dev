const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
// routes
const AuthRoute = require("./routes/Authroutes.js");
// roter config
const PORT = 9000;
const app = express();
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  res.send("Welcome to Backend Web_dev");
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest =
      "media/" +
      file.originalname.split("_")[0] +
      "/" +
      file.originalname.split("_")[1] +
      "/";
    cb(null, dest); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Define the filename for uploaded files
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});
// Mongo Connection
const CONNECTION = "mongodb://localhost:27017/Webdev";
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, async () => {
      console.log("Server running on Port ==> " + PORT);
    })
  )
  .catch((error) => console.log(`${error} did not connect`));

// Auth User
app.use("/media", express.static("./media/videos"));
app.use("/auth", AuthRoute);
