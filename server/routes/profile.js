const { Router } = require('express');
require('../db/database');
const {
  findUserAndUpdateBio,
  getUser,
  findUserAndUpdateImage,
} = require('../db/database');

const profileRoute = Router();

profileRoute.get('/', (req, res) => {
  // here we will grab info from the DB for a single user profile and render it to the page
  if (req.user) {
    //console.log(req.body);
    res.status(200);
    res.send('profile GET');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

profileRoute.post('/bio', (req, res) => {
  // this could be POST or Patch or PUT
  // it should allow the user to either create update their profile information
  // can all this functionality be included in the same route??
  if (req.user) {
    findUserAndUpdateBio(req.user, req.body.bio.message).then((data) => {
      getUser(req.user).then((user) => {
        //console.log(user);
        res.status(201);
        res.send(user);
      });
    });
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

profileRoute.post('/image', (req, res) => {
  // this could be POST or Patch or PUT
  // it should allow the user to either create update their profile information
  // can all this functionality be included in the same route??
  if (req.user) {
    // console.log(req.body);
    findUserAndUpdateImage(req.user, req.body.image.imageUrl).then((data) => {
      getUser(req.user).then((user) => {
        console.log(user, 'USER in POST');
        res.status(201);
        res.send(user);
      });
    });
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});
module.exports = {
  profileRoute,
};
