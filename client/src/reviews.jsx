import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import axios from 'axios';

function Reviews(props) {
  const { register, handleSubmit } = useForm();
  const [reviews, setRev] = useState([]);
  let siteURL = window.location.href.split('site=');
  // window.location = window.location.href.split('site=')[0] + `${Math.floor(Math.random() * 99999999)}`;
  siteURL = siteURL[1];
  useEffect(() => {
    axios.post('/review/url', { weburl: siteURL })
      .then(() => axios.get('/review/url')
        .then(({ data }) => {
          const revArray = [];
          data[1].forEach((review, index) => {
            review.username = data[0][index];
            review.webUrl = data[2][index];
            revArray.push(review);
          });
          setRev(revArray);
        }))
      .catch((err) => console.error(err));
  }, []);
  const updateLike = (reviewId, type) => {
    // console.log(reviewId, type);

    axios.put(`/review/update/type=${type}`, {
      reviewId,
    }).then(() => {
      console.log('posted');
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    axios.post('/review/submit', {
      text: data,
      weburl: siteURL,
      title: document.getElementById('title').value,
      keyword: document.getElementById('keyword').value,
    }).then(() => {
      console.log('review posted!');
      window.location = '/me';
    });
  };

  const userLogout = () => {
    axios.get('/logout').then(() => {
      // console.log('logged out');
      window.location = '/';
    });
  };
  // const [passedSite, passedSiteUpdate] = useState('hello');

  // let keywordTextBox = document.getElementById('keyword').value;
  return (
    <div>
      <h1>
        Leave a Review For
        {siteURL.split('//')[1].split('.com')[0]}
        <form onSubmit={handleSubmit(userLogout)}>
          <button>Logout</button>

        </form>
      </h1>
      {reviews.map((review) => {
        let count = 0;
        return (
          <div key={review.id}>
            <br />
            <div>
              Written By:
              {review.username}
            </div>
            <div>
              Likes:
              {review.likes}
            </div>
            <div>
              {' '}
              Dislikes:
              {review.dislike}
            </div>
            <br />
            <div>{review.title}</div>
            <div>{review.text}</div>
            <button
              type="submit"
              onClick={() => {
                if (count === 0) {
                  updateLike(review.id, 'like');
                  count = +1;
                }
              }}
            >
              like
            </button>
            <button
              type="submit"
              onClick={() => {
                if (count === 0) {
                  updateLike(review.id, 'dislike');
                  count = +1;
                }
              }}
            >
              dislike
            </button>

          </div>
        );
      })}
      <h1>Reviews Component</h1>
      <input id="title" type="text" placeholder="leave a title" />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>|Message|</label>
        <br />
        <textarea ref={register} name="message" />
        <br />
        <div>
          Keywords help other users find other reviews associated with what
          they're searching!
        </div>
        <input id="keyword" type="text" placeholder="leave a keyword" />
        <br />
        <button>Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
