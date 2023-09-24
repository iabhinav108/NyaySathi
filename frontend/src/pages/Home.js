import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/HomeStyles.css';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <Layout>
      <div className="home">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '-1',
          }}
        >
          <source src={require('../images/Judgegavel.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="headerContainer">
          <h1>{message}</h1>
          <h1>Welcome To NyaySathi</h1>
          <p>The new way to make courts work efficiently</p>
          <Link to="/login">
            <button>Register for Pre-Trail Conference</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
