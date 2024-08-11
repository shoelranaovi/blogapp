const express = require("express");
const errorHandler = require("../middleware/error");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");

authRoute.post("/sign-up", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(errorHandler(400, "plz provide your details"));
    }
    const pattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(pattren)) {
      return next(errorHandler(400, "plz provide valid email"));
    }
    if (username.length <= 4) {
      return next(errorHandler(400, "username should be 8 charactor or more"));
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const payload = {
      username,
      email,
      password: hash,
    };

    const newUser = new User(payload);
    const saveUser = await newUser.save();
    res.status(200).json({
      message: "user create successfull",
      data: saveUser,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler());
  }
});

authRoute.post("/sign-in", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(errorHandler(400, "plz provide your information"));
    }
    const finduser = await User.findOne({ email });
    if (!finduser) {
      return next(errorHandler(400, "plz provide valid email"));
    } else {
      const comparePass = await bcrypt.compareSync(password, finduser.password);
      if (!comparePass) {
        return next(errorHandler(400, "plz provide correct Password"));
      }

      const tokendata = {
        id: finduser._id,
        email: finduser.email,
        role: finduser.role,
      };
      const token = jwt.sign(tokendata, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      const tokenoption = {
        httpOnly: true,
        securce: true,
      };
      const userinfromation = {
        id: finduser._id,
        email: finduser.email,
        role: finduser.role,
        avatar: finduser.avatar,
      };
      res.status(201).cookie("token", token, tokenoption).json({
        message: "successfully login",
        data: userinfromation,
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
authRoute.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({}, "id email role");
    res.status(200).json({
      message: "user found",
      data: users,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});

authRoute.delete("/deleteuser/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletuser = await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "user delete successfully",
      data: deletuser,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
authRoute.put("/updaterole/:id", async (req, res, next) => {
  const { role } = req.body;
  const { id } = req.params;

  try {
    const updatetuser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );
    if (!updatetuser) {
      return next(errorHandler(400, "user not found"));
    }

    res.status(200).json({
      message: "user update successfully",
      data: updatetuser,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
authRoute.post("/signout", async (req, res, next) => {
  try {
    res.clearCookie("token").json({
      message: "Sign Out complete successfully",
      data: null,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});

module.exports = authRoute;
