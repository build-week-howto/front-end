import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import HomePageCards from '../HomePageCards/HomePageCards';

const HomePage = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    Axios.get('https://bw-how-to.herokuapp.com/guides', {
      headers: { authorization: token }
    })
      .then(res => {
        console.log('Data', res.data);
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {users.map(user => (
        <HomePageCards {...user} key={user.id} />
      ))}
    </div>
  );
};

export default HomePage;
