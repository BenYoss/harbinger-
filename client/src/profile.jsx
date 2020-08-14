import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Profile() {
  const [user, setUser] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (userBio) => {
    axios.post('/profile/bio', { bio: userBio })
      .then(({ data }) => {
        setUser(data);
      });
  };
  const imageSubmit = (imageUrl) => {
    axios.post('/profile/image', { image: imageUrl })
      .then(({ data }) => {
        console.log(data);
        setUser(data);
      });
  }

  useEffect(() => {
    axios.get('/good')
      .then(({ data }) => {
        //console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: '#800000' }}>
        <h1 style={{ display: 'inline-block', color: 'white', marginRight: '600px' }}>
          {user.username}
          : Profile
        </h1>
        <Link to="/"><h1 style={{ display: 'inline-block', color: 'white', textAlign: 'right' }}>Back to Homepage</h1></Link>
      </div>
      <img src={user.image} width="20%" height="20%" />
      <h3>Edit Image</h3>
      <form onSubmit={handleSubmit(imageSubmit)}>
        <textarea ref={register} name="imageUrl" />
        <button>Submit Image</button>
      </form>
      <div>
        <div>
          <h2>Bio for {user.username}</h2>
          <div>{user.bio}</div>

        </div>

      </div>
      <div>
        <div>
          <h3>Edit Bio</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea ref={register} name="message" />
            <button>Submit Bio</button>
          </form>

        </div>

      </div>
    </div>
  );
}

export default Profile;