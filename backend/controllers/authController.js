// backend/controllers/authController.js
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Your login logic here
  res.json({ message: `User ${username} logged in` });
};

exports.register = (req, res) => {
  const { username, password } = req.body;
  // Your register logic here
  res.json({ message: `User ${username} registered` });
};
