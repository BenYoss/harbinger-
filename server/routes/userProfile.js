const { Router } = require('express');
const { getUserReviews } = require('../db/database');
require('../db/database');
const userProfile = Router();

userProfile.get('/:user', (req, res) => {
  let username = req.params.user;
  // username is now equal to the user name
  // I can query my db using this and retrieve
  // their name
  // here we will grab info from the DB for a single user profile and render it to the page
  if (req.user) {
    console.log(username);
    res.status(201);
    getUserReviews(username).then((data) => res.send(data));

    //res.send('profile GET');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

module.exports = {
  userProfile,
};
