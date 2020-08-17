import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect,
} from 'react-router-dom';
import axios from 'axios';
import { styled, Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { testArray } from './testData';

let boom;
const redir = '';
const count = 0;
function Search() {
  const searchBing = (query) => {
    const data = JSON.stringify(query);

    const config = {
      method: 'post',
      url: '/api/websites/search',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    // console.log(testArray, 'hello');
    // webSitesUpdate(testArray);
    // **** COMMENTED THE BELOW OUT TO NOT USE ALL OUR BING CALLS
    // BELOW STILL WORKS
    // BE SURE TO CHANGE WEBSITES UPDATE TO PROPER OBJECT KEYS
    // webSitesUpdate(testArray);
    return axios(config)
      .then((response) => {
      // console.log(JSON.stringify(response));
        // console.log(JSON.stringify(response.data[1]), 'THIS IS DATA');
        // console.log(JSON.stringify(response.data));
        // console.log(JSON.stringifyresponse.data.webPages.value));
        console.log(response.data);
        webSitesUpdate(response.data[0].webPages.value);
        if (response.data[1] !== null) {
          let fullReviews = [];
          response.data[1].forEach((review, index) => {
            review.webUrl = response.data[2][index];
            fullReviews.push(review);
          })
          reviewedSitesUpdate(fullReviews);
        } else {
          reviewedSitesUpdate([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 20,
    padding: '0 20px',
  });

  const Background = styled(Toolbar)({
    background: 'linear-gradient(45deg, #FE6242 30%, #FF2445 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'red',
  });

  const WebBG = styled(Box)({
    borderRadius: 3,
    height: 100,
    boxShadow: '0 3px 5px 2px #b81a06',
    backgroundColor: '#FAEBD7',
    color: 'black',
  });

  const [webSites, webSitesUpdate] = useState([]);
  const [reviewedSites, reviewedSitesUpdate] = useState([]);
  // const [userInfo, userInfoUpdate] = useState([
  //   { User: { username: 'hello' } },
  // ]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    searchBing(data);
    // boom = data.clientSearch;
    // redir = <Redirect to="/searchresults" />;
  };

  // const tester = (data) => {
  //   if(data){
  //     if (count === 1) {
  //       searchBing(data);
  //     } else {
  //       count++;
  //       console.log(data);
  //     }
  //   } else {
  //     console.log('no data');
  //   }
  // };

  useEffect(() => {
    // axios.get('/api/search').then(({ data }) => {
    //    boom = data;
    // });
  }, []);

  return (
    <div>
      <div  style={{ textAlign: 'center', verticalAlign: '-20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search:</label>
        <input ref={register} name="clientSearch" />
        {/* <Link
          to={{
            pathname: `/search`,
          }}
        >
          <button>Search websites</button>
        </Link> */}
        <button><MyButton>Search websites</MyButton></button>
        </form>
        </div>
        <div className="reviewedSites list">
          {reviewedSites.map((review) => (
            <div key={review.id}>
              <br />
              <div>
                Written By:
                {review.User.username || 'Jim'}
                URL:
                {review.webUrl}
              </div>
              <Link
                to={{
                  pathname: `/userProfile/name=${review.User.username}`,
                }}
              >
                <button>
                  {review.User.username || 'Jim'}
                  's Profile
                </button>
              </Link>
              <img src={review.User.image} width="5%" height="5%" />
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
              <div>{review.text}</div>
              <button>See Review</button>
            </div>
          ))}
        </div>
        <div className="webSitesList">
          {webSites.map((site) => (
            <WebBG key={site.id}>
              <br />
              <a href={site.url}>{site.url}</a>
              <br />
              <div>{site.snippet}</div>
              <Link
                to={{
                  pathname: `/review/site=${site.url}`,
                }}
              >
                <button>Review Website!</button>
              </Link>
            </WebBG>
          ))}
        </div>
    </div>
  );
}

export default Search;
