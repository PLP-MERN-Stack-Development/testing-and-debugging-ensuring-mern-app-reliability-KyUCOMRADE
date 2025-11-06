// server/middleware/errorMiddleware.js

module.exports = (err, req, res, next) => {
  console.error(err.stack); // logs the error
  res.status(500).json({ message: 'Something broke!' }); // sends generic error
};
