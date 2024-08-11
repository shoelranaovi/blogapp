const errorHandler = require("./error");

const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "Admin") {
    return next(
      errorHandler(401, "your are not authorise perform this action")
    );
  }

  next();
};

module.exports = isAdmin;
