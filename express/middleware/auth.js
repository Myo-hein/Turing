const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/Config');

const verifyUserToken = (req, res, next) => 
{
  let token = req.headers.authorization;
  if(!token)
  {
    return res.status(401).send("Access Denied /  Unauthorized request");
  }

  try
  {
    token = token.split(' ')[1]; // Remove Bearer from string
    if(token === null || !token) {
      return res.status(401).send('Unauthorized Request');
    }

    let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
    if(!verifiedUser) {
      return res.status(401).send("Unauthorized Request");
    }

    req.user = verifiedUser;
    next();
  }
  catch(e)
  {
    console.log(e);
    res.status(401).send("Invalid Token");
  }
}

module.exports = {
  verifyUserToken
}