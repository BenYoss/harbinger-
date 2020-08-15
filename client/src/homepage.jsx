import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Search from './search.jsx';


function HomePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      setUser(data);
    });
  }, []);

  const [topReviews, setTop] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=top').then((reviews) => {
      console.log(reviews.data, 'Top');
      const topArray = [];
      reviews.data[1].forEach((review, index) => {
        review.username = reviews.data[0][index];
        review.webUrl = reviews.data[2][index];
        topArray.push(review);
      });
      setTop(topArray);
    });
  }, []);

  const [bottomReviews, setBottom] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=bottom').then((data) => {
      //console.log(data);
      setBottom(data);
    });
  }, []);

  const updateLike = (reviewId, type) => {
    //console.log(reviewId, type);

    axios.put(`/review/update/type=${type}`, {
      reviewId,
    }).then(() => {
      console.log('posted');
    });
  };


  return (
    <div>
      <div style={{ backgroundColor: '#800000' }}>
        <h2
          style={{
            display: 'inline-block',
            color: 'white',
            marginRight: '800px',
          }}
        >
          HomePage Component
        </h2>
        <img
          src={user.image}
          width='4%'
          height='4%'
          style={{
            display: 'inline-block',
            marginRight: '2px',
            borderRadius: '50%',
            verticalAlign: 'middle',
          }}
        />
        <Link to='/me'>
          <h2
            style={{
              display: 'inline-block',
              color: 'white',
              textAlign: 'right',
            }}
          >
            {user.username}
          </h2>
        </Link>
      </div>
      <Search />
      <h3 style={{ display: 'inline-block', marginRight: '800px' }}>
        Top Best Reviews
      </h3>
      {topReviews.map((review) => {
        let count = 0;
        return (
          <div key={review.id}>
            <br />
            <div>
              Written By:
            {review.username}
            </div>
            <div>
              Url:
            {review.webUrl}
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
                };

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
                };

              }}
            >
              dislike
          </button>
            
          </div>
        )
      })}
      {/* <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
        Top Worst Reviews
      </h3> */}
    </div>
  );
}

export default HomePage;
