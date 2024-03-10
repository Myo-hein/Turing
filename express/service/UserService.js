const bcrypt = require('bcrypt');
const User = require('../model/User');

const register = async (userName, password) => 
{
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let user = new User({
    username: userName,
    password: hashPassword
  });

  return user.save();
}

const login = async (userName, password) => {
  const filter = {
    username: userName
  };

  const user = await User.findOne(filter);
  if(user)
  {
    const validPass = await bcrypt.compare(password, user.password);
    if(validPass)
    {
      return user;
    }
    else
    {
      throw Error("Invalid creditial");
    }
  }
  throw Error("Invalid Creditial");
}

const getUserByID = (userID) => 
{
  return {
    userID: userID,
    name: "Some data form DB"
  }
};

module.exports = {
  register,
  login,
  getUserByID
}