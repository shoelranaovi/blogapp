const express = require("express");
const ConnectDb = require("./confiq/connectDb");
require("dotenv").config();
const cors = require("cors");
const bookRouter = require("./Route/blogRoute");
const commentRoute = require("./Route/commentRoute");
const authRoute = require("./Route/authRoute");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/blog", bookRouter);
app.use("/api/comment", commentRoute);
app.use("/api/auth", authRoute);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 400;
  const message = error.message || error.message || "error occur";
  res.status(statusCode).json({
    message,
    statusCode,
    success: false,
    error: true,
  });
  next();
});

ConnectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
