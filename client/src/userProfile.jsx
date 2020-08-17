import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { json } from 'body-parser';
import { styled, Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
//import { response } from 'express';

function UserProfile() {
  const { handleSubmit } = useForm();
  let username = window.location.href.split('name=');
  username = username[1].split('%20').join(' ');
  //console.log(username);
  let usernameReverse = username.split(' ').reverse().join(' ');

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {

    console.log(username);
    axios.post(`/user/${username}`, {
      username: username,
    })
      .then((reviews) => {
        console.log(reviews.data);
        let userArray = [];
        reviews.data[1].forEach((review, index) => {
          review.username = reviews.data[0][index];
          review.webUrl = reviews.data[2][index];
          review.image = reviews.data[3].image;
          userArray.push(review);
        });
        setUserReviews(userArray);
      });

  }, []);

  const updateLike = (reviewId, type) => {
    // console.log(reviewId, type);

    axios.put(`/review/update/type=${type}`, {
      reviewId,
    }).then(() => {
      console.log('posted');
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

  const ReviewBG = styled(Box)({
    borderRadius: 3,
    height: 200,
    boxShadow: '0 3px 5px 2px #b81a06',
    backgroundColor: '#FAEBD7',
    color: 'black',
  });
  
  const WebBG = styled(Box)({
    borderRadius: 3,
    height: 100,
    boxShadow: '0 3px 5px 2px #b81a06',
    backgroundColor: '#FAEBD7',
    color: 'black',
  });

  const LikeBG = styled(Box)({
    borderRadius: 3,
    height: 200,
    boxShadow: '0 3px 4px 2px gray',
    backgroundColor: '#9ACD32',
    color: 'black',
  });

  const DikeBG = styled(Box)({
    borderRadius: 3,
    height: 200,
    boxShadow: '0 3px 4px 2px gray',
    backgroundColor: '#F08080',
  });

  const ImageBG = styled(Box)({
    borderRadius: 7,
    boxShadow: '0 1px 30px 0px gray',
    backgroundColor: '#FAEBD7',
    color: 'black',
  });

  const TitleBox = styled(Box)({
    background: 'linear-gradient(45deg, #FE6534 30%, #FCD98D 90%)',
    borderRadius: 7,
    color: 'black',
  });
  
  const userLogout = () => {
    axios.get('/logout').then(() => {
      // console.log('logged out');
      window.location = '/';
    });
  };
  // useEffect(() => {
  //   let data = JSON.stringify({
  //     name: { username },
  //   });

  //   var config = {
  //     method: 'get',
  //     url: `http://localhost:8080/user/${username}`,
  //     headers: {},
  //     data: data,
  //   };

  //   axios(config).then((response) => {
  //     console.log(JSON.stringify(response.data));
  //     setUser(response.data);
  //   });
  // }, []);

  // TRYING TO RENDER THE review.User.image to the top
  // it will render in the map function
  // but it won't render once on it's own once i set the user with
  // the response data

  return (
    <div>
     <div>
        <Background>
        <h1
          style={{
            display: 'inline-block',
            color: 'white',
            marginRight: '400px',
          }}
        >
          {usernameReverse}
          : Profile
        </h1>
        <Link to="/">
            <h1
              style={{
                display: 'inline-block',
                color: 'white',
                textAlign: 'right',
              }}
            >
              Back to Homepage
            </h1>
        </Link>
          <form onSubmit={handleSubmit(userLogout)}>
            <button><MyButton>Logout</MyButton></button>

          </form>
        </Background>

      </div>
      <div>
        <div />
      </div>
     <Background><h1 style={{ marginLeft: "500px", color: "white" }}>{usernameReverse}'s Reviews</h1></Background>
      <div>
        {userReviews.map((review) => {
          console.log(review);
          return (
          <div>
            <ImageBG width="200">
            <div >
            <img src={review.image} style={{ position: 'absolute', marginBottom: "20px", boxShadow: '0 3px 10px 2px gray', }} width='150px'
          height='150px'/>
            <TitleBox>
            <h1 style={{ marginLeft: "200px", padding: "0px", color: "white"}}>{review.title}</h1>
            </TitleBox>
            <h4 style={{ marginLeft: "170px", padding: "0px"}}> Written By: {review.username}</h4>
            <a href={review.webUrl} style={{ marginLeft: "170px", padding: "0px"}}>{review.webUrl}</a>
            <div style={{ padding: "20px"}}>
            <div style={{ display: 'inline-block', marginLeft: "20px" }}>
            <LikeBG style={{ maxHeight: "20px", maxWidth: "400px", color: "white" }}>
            <h4 style={{ }}>
              Likes:
            {review.likes}
            </h4>
            </LikeBG>
            <DikeBG style={{ maxHeight: "20px", maxWidth: "400px", color: "white" }}>
            <h4>
              {' '}
            Dislikes:
            {review.dislike}
            </h4>
            </DikeBG>
            </div>
            <div style={{ maxWidth: "700px", marginLeft: "50px", marginBottom: "30px", positon: "absolute", padding: "12px", display: 'inline-block' }}>{review.text}</div>
            </div>
            <img height="10" style={{marginTop: "20px"}}></img>
            </div>
            </ImageBG>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default UserProfile;
