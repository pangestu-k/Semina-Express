const notFound = (req, res) =>
  res.status(400).json({
    msg: "Route Doesn't Exist or Found",
  });

module.exports = notFound;
