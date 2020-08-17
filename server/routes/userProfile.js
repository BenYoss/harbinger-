const { Router } = require('express');
const { getUserReviews, findTopReviews } = require('../db/database');
require('../db/database');
const userProfile = Router();

userProfile.post('/:user', (req, res) => {
  let username = req.body.username;
  if (req.user) {
    //console.log(req.body, 'username');
    res.status(201);
    getUserReviews(username).then((data) => {
      //console.log(data);
      findTopReviews({ where: { id_user: data[0].dataValues.id_user} })
        .then((data) => {
          console.log('I AM DEHDDJDSK', data);
          
          res.send(data);
        })
        .catch((err) => console.error(err));
    });

  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

module.exports = {
  userProfile,
};
