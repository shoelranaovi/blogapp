async (req, res, next) => {
  try {
    res.status(200).json({
      message: "",
      data: null,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
};
