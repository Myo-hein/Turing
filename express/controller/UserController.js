const userService = require('../service/UserService');
const jwt = require('jsonwebtoken');
const config = require('../config/Config');

const register = async function(req, res, next)
{
  let userName = req.body['userName'];
  let password = req.body['password'];

  try
  {
    let user = await userService.register(userName, password);
    
    // Generate JWT token
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.status(200).send({ token });
  }
  catch(e)
  {
    console.log(e);
    res.status(400).send({ message: "User already existed" });
  }
}

const login = async function(req, res, next)
{
  let userName = req.body['userName'];
  let password = req.body['password'];

  try
  {
    let user = await userService.login(userName, password);

    // Generate JWT token
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.status(200).send({ token });
  }
  catch(e)
  {
    console.log(e);
    res.status(401).send({ message : e.message });
  }
}

const getUserByID = async function(req, res, next)
{
  console.log('Req ', req.params);
  let userID = req.params.userID;
  let user = userService.getUserByID(userID);
  return res.status(200).json(user);
}

module.exports = {
  getUserByID,
  register, 
  login
}