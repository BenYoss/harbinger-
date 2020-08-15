// testing upstream
const { Router } = require('express');
const path = require('path');
require('../db/database');
const { saveOrFindKeyWord, findArticleByKeyWord } = require('../db/database');

// const azure = require('server/azure.js');
const searchRoute = Router();
const { webSearchApiClient } = require('../azure.js');

// findArticleByKeyWord('apple.com');

searchRoute.post('/search', (req, res) => {
  let bingSearch;
  let dbSearch;
  // psuedocoded out for postman use
  // if (req.user) {
  webSearchApiClient.web
    .search(req.body.clientSearch)
    .then((result) => {
      const properties = ['webPages'];
      for (let i = 0; i < properties.length; i++) {
        if (result[properties[i]]) {
          bingSearch = result;
        }
      }
    })
    .catch((err) => {
      throw err;
    })
    .then(() =>
      findArticleByKeyWord(req.body.clientSearch)
        .then((data) => {
          dbSearch = data;
          res.send([bingSearch, dbSearch]);
        })
        .catch((err) => console.log(err, 'YOURE NOT GOOD AT PROMISES'))
    );

  // *** DON'T DELETE, FOR AUTHENTICIATION ***
  // } else {
  //   res.status(401);
  //   res.send('unauthorized');
  // }
});

module.exports = {
  searchRoute,
};
