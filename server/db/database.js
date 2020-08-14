const { Sequelize, TableHints } = require('sequelize');
// const { default: Reviews } = require('../../client/src/reviews');
require('dotenv').config();
// create a connection to localDB

const db_name = process.env.DB || 'harbinger';
const db_user = process.env.DB_User || 'root';
const db_pass = process.env.DB_Pass || '';
const db_host = process.env.HOST || 'localhost';

const db = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('database connected!!!!');
  })
  .catch((err) => console.error(err));

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(50),
  },
  serial: {
    type: Sequelize.STRING(100),
  },
  bio: {
    type: Sequelize.STRING(1000),
  },
  image: {
    type: Sequelize.STRING(250),
  },
});
Users.sync();

const Message = db.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_sender: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_recipient: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  message: {
    type: Sequelize.STRING(2000),
  },
  date: {
    type: Sequelize.DATE,
  },
});

const Followed = db.define('Followed', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_follower: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_author: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
});

const RevLike = db.define('RevLike', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_follower: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_author: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
});

const Review = db.define('Review', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  likes: {
    type: Sequelize.INTEGER,
  },
  dislike: {
    type: Sequelize.INTEGER,
  },
  id_user: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  text: {
    type: Sequelize.STRING(2020),
  },
  id_web: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_keyword: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  date: {
    type: Sequelize.DATE,
  },
});
Review.sync();

const WebUrls = db.define('WebUrls', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING(500),
  },
});
WebUrls.sync();

const Keyword = db.define('Keyword', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  keyword: {
    type: Sequelize.STRING(100),
  },
});
Keyword.sync();

// TESTING TO SEE IF I CAN FIX DB LINKS
Review.belongsTo(Users, { foreignKey: 'id_user' });

// const findArticleByKeyWord = (keyword) =>
//   Keyword.findOne({ where: { keyword } })
//   .then((data) => {
//     if (data === null) {
//       console.log('keyword not found');
//       return;
//     } else {
//       console.log('hello')
//     };

// let test;
const findArticleByKeyWord = (keyword) => Keyword.findOne({ where: { keyword } }).then((data) => {
  if (data === null) {
    console.log('no keyword found');
  } else {
    return Review.findAll({
      include: [
        {
          model: Users,
          required: true,
        },
      ],
      // where: {
      //   id_keyword: data.id,
      // },
      // include: [
      //   {
      //     model: Users,
      //   },
      // ],
    })
      .then((data) => {
        console.log(typeof data);
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err, 'SOMETHING WENT WRONG'));
  }
});

// let articles = findArticleByKeyWord('apple.com');
// console.log(articles, 'ARTICLESSSSSSS');

// either find or save a keyword
const saveOrFindKeyWord = (keyword) => Keyword.findOne({ where: { keyword } })
  .then((data) => {
    if (data === null) {
      console.log('keyword created!!!');
      return Keyword.create({ keyword });
    }
    return data;
  })
  .catch((err) => console.log(err));

// either save or find web url
const saveOrFindWebUrl = (url) => WebUrls.findOne({ where: { url } })
  .then((data) => {
    if (data === null) {
      console.log('webURL created!');
      return WebUrls.create({ url });
    }
    return data;
  })
  .catch((err) => console.log(err));

  // when you login in via google, this function is called and will create an 
  // entry for you in the DB if it doesn't already exist
const saveUsers = (username, serial, bio, image) => Users.findOne({ where: { serial } }).then((data) => {
  if (data === null) {
    return Users.create({
      username,
      serial,
      bio,
      image,
    });
  }
  console.log(data);
  console.log('entry already exists');
});

const getUser = (id) => Users.findOne({ where: { serial: id } });

const saveReview = (username, text, weburl, keyword) => {
  let idUser;
  let idWeb;
  let idKeyword;
  return new Promise((resolve, reject) => {
    saveOrFindKeyWord(keyword).then((data) => {
      idWeb = data.dataValues.id;
      saveOrFindWebUrl(weburl).then((data) => {
        idKeyword = data.dataValues.id;
        Users.findOne({ where: { username } }).then((data) => {
          idUser = data.dataValues.id;
          return Review.create({
            likes: 0,
            dislike: 0,
            id_user: idUser,
            text,
            id_web: idWeb,
            id_keyword: idKeyword,
            date: new Date(),
          }).then((data) => resolve(data));
        });
      });
    });
  });
};

// saveReview('Sebastian', 'this is just a TEST', 'www.boop.com', 'boop');

// functions to update the user's progfile info
const findUserAndUpdateBio = (serial, bio) => Users.findOne({ where: { serial } }).then((user) => user
  .update({ bio })
  .then((data) => data)
  .catch((err) => console.log(err)));

const findUserAndUpdateImage = (serial, image) => Users.findOne({ where: { serial } })
  .then((user) => user.update({ image }))
  .then((data) => data)
  .catch((err) => console.log(err));

const findAndUpdateUsername = () => {};

const findTopReviews = () => {
  const sendArr = [];
  let userIds;
  const usernames = [];
  let webUrls;
  let keywords;
  // have sorting featue 1.find, sort by like, limit 5/10
  return Review.findAll({ limit: 10 }).then((data) => {
    sendArr.push(data);
    userIds = data.map((review) => review.dataValues.id_user);
    return Users.findAll({
      where: {
        id: userIds,
      },
    }).then((data) => {
      // console.log(data[0].dataValues.username, 'THIS IS THE DATA');
      userIds.forEach((userId) => {
        data.forEach((userObj) => {
          if (userObj.dataValues.id === userId) {
            usernames.push(userObj.dataValues.username);
          }
        });
      });
      console.log(sendArr);
      return [usernames, ...sendArr];
      // return sendArr;
    });
  });
};

module.exports = {
  db,
  getUser,
  saveUsers,
  saveOrFindKeyWord,
  saveOrFindWebUrl,
  saveReview,
  findUserAndUpdateBio,
  findUserAndUpdateImage,
  findArticleByKeyWord,
  findTopReviews,
};
