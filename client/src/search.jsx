import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect,
} from 'react-router-dom';
import axios from 'axios';
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
    .then(function (response) {
      //console.log(JSON.stringify(response));
      console.log(JSON.stringify(response.data[1]), "THIS IS DATA");
      console.log(JSON.stringify(response.data));
      //console.log(JSON.stringifyresponse.data.webPages.value));
      webSitesUpdate(response.data[0].webPages.value);
      if (response.data[1] !== null) {
        reviewedSitesUpdate(response.data[1]);
      } else {
        reviewedSitesUpdate([]);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

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
        <button>Search websites</button>
        <div className="reviewedSites list">
          {reviewedSites.map((review) => (
            <div key={review.id}>
              <br />
              <div>
                Written By:
                {review.User.username || 'Jim'}
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
            <div key={site.id}>
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
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Search;
