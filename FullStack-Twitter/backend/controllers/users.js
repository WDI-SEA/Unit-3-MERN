const User = require("../models/User");
const Tweet = require("../models/Tweet");

//Require bcrypt
const bcrypt = require("bcrypt");
//To hash the password any random number -> number of rounds
const salt = 10;

//Require JsonWebToken
const jwt = require("jsonwebtoken");

async function findAllUsers(req, res) {
  const allUsers = await User.find().populate("tweets");
  res.json(allUsers);
}

async function createUser(req, res) {
  //Or .create(req.body), but form must match the DB
  try {
    //Plain Text to Encrypted string
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(hashedPassword);

    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
}

const auth_sigin_post = async (req, res) => {
  let { email, password } = req.body;
  console.log(email);

  try {
    let user = await User.findOne({ email }); //short to-> email: email
    console.log(user);
    if (!user) {
      return res.json({ message: "User Not Found" }).status(400);
    }

    //Password Comparison:
    const isMatch = await bcrypt.compareSync(password, user.password);
    console.log(password); //Plaintext password
    console.log(user.password); //Encrypted password

    if (!isMatch) {
      return res.json({ message: "Password not matched" }).status(400);
    }

    // JWT Token
    const payload = {
      user: {
        id: user._id,
        name: user.name
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token }).status(200);
      }
    );
  } catch (error) {
    console.log(error);
    res.json({ message: "You are not loggedin. Try again later." }).status(400);
  }
};

async function createUserTweet(req, res) {
  //Find the user that created the tweet
  let user = await User.findById(req.params.userId);
  //Create the tweet
  let newTweet = await Tweet.create(req.body);
  //push the new tweet ID into the user's 'tweets' property
  user.tweets.push(newTweet._id);
  //Save our changes to the user
  await user.save();
  //Populate the tweet data
  await user.populate("tweets");
  //Respond with the user data
  res.json(user);
}

//Update User Information:
async function updateUserInfo(req, res) {
  let updateUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body
    //Or we can specify them like this:
    //{ name: req.body.name,
    // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password
    //}
  );

  res.json(updateUser);
}

//Delete User:
async function deleteUser(req, res) {
  let userDelete = await User.findByIdAndRemove(req.params.userId);

  res.json(userDelete);
}

//Exporting it to the Routes ;)
module.exports = {
  createUser,
  createUserTweet,
  updateUserInfo,
  deleteUser,
  findAllUsers,
  auth_sigin_post,
};
