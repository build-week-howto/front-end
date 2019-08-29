import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './homepage.scss';

import HomePageCards from '../HomePageCards/HomePageCards';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const HomePage = props => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem('token');
    Axios.get('https://bw-how-to.herokuapp.com/guides', {
      headers: { authorization: token }
    })
      .then(res => {
        // console.log('Data', res.data);
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='card-container'>
      <div>
        <Link to='/create'>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Create Post
          </Button>
        </Link>
      </div>

      {users.map(user => (
        <HomePageCards {...user} key={user.id} />
      ))}
    </div>
  );
};

export default HomePage;
