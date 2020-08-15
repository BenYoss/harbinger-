const { Router } = require('express');
require('../db/database');
const {
  saveReview, getUser, findTopReviews, updateLikeInReview, updateDislikeInReview, saveOrFindWebUrl,
} = require('../db/database');

const reviewRoute = Router();
let changer = '';
reviewRoute.get('/url', (req, res) => {
  saveOrFindWebUrl(changer).then((data) => {
    console.log(data.dataValues.id, 'this is data ofcourse');
    findTopReviews({ where: { id_web: data.dataValues.id } })
      .then((ddata) => {
        console.log('I AM DEHDDJDSK', ddata);
        res.send(ddata);
      })
      .catch((err) => console.error(err));
  }).catch((err) => console.error(err));
});

reviewRoute.post('/url', (req, res) => {
  changer = req.body.weburl;
  console.log(changer, "here I am in time");
  res.end();
});

reviewRoute.get('/retrieve/:id', (req, res) => {
  if (req.params.id === 'id=top') {
    findTopReviews({ limit: 10 }).then((data) => {
      // console.log(Array.isArray(data));
      // find the top reviews
      // find out the corresponding urls
      // find out the corresponding users
      // send all of this data
      // console.log(data);
      // res.write(JSON.stringify(['more data']));
      res.status(200);
      res.send(data);
    });
  } else if (req.params.id === 'id=bottom') {
    console.log('id bottom');
    res.status(200);
    res.send('Bottom Reviews');
  }
});

reviewRoute.post('/retrieve', (req, res) => {
  // this is the route that will retrieve a specific review based on user input
  if (req.user) {
    res.status(201);
    res.send('review POST');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

reviewRoute.post('/submit', (req, res) =>
  // if (req.user) {
  getUser(req.user).then((data) => {
    console.log(typeof data.dataValues.username);
    const {
      text, title, weburl, keyword,
    } = req.body;
    console.log(text, weburl, keyword);
    return saveReview(
      data.dataValues.username,
      title,
      text.message,
      weburl,
      keyword,
    ).then(() => {
      res.status(201);
      res.send('review POST');
    });
  }));
// })

// } else {
//   res.status(401);
//   res.send('unauthorized');
// }
reviewRoute.put('/update/:type', (req, res) => {
  if (req.params.type === 'type=like') {
    updateLikeInReview(req.body.reviewId)
      .then(() => {
        console.log('review updated!');
        res.status(204);
        res.end();
      });
  } else {
    updateDislikeInReview(req.body.reviewId)
      .then(() => {
        console.log('review updated!');
        res.status(204);
        res.end();
      });
  }
});

module.exports = {
  reviewRoute,
};
