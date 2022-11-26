const client = require("../config/database.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!(email && password)) {
      res.status(400).send("user input require");
    }
    const logData = await client.query(
      `SELECT * FROM survusers WHERE email= $1;`,
      [email]
    ); //Check if user exist
    arrData = logData.rows;

    if (arrData.length == 0) {
      res.status(400).json({
        message: "user doesn't exist",
      });  
    } else {
      bcrypt.compare(password, arrData[0].password, (err, results) => {
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (results === true) {
          const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
          logData.rows.token = token;
          res.status(200).json({
            message: "User successfully signed in",
            arrData,
            token,
          });
        } else {
          //define errors
          if (results != true) {
            res.status(400).json({
              error: "incorrect password",
            });
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Database error while logging in!",
    });
  }
};



module.exports.logout = (req, res) => {
  res.status(200).json({ token: "" });
};
