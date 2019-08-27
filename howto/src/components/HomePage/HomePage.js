import React from 'react';
import Axios from 'axios';

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};
const token = localStorage.getItem('token');
Axios.get('https://bw-how-to.herokuapp.com/guides', {
  headers: { authorization: token }
})
  .then(res => {
    console.log(res.data);
  })
  .catch(err => console.error(err));

export default HomePage;
