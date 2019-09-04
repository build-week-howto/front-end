import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { NavLink,} from 'react-router-dom';


import styles from './homePage.scss';

import CreateGuide from '../CreateGuide/CreateGuide';
import SearchPage from '../SearchPage/SearchPage';

const HomePage = (props) => {
  const [guides, setGuides] = useState([]);
  const embed = 'embed/';
 
console.log(props);




 

  useEffect(() => {
    const token = localStorage.getItem('token');
    Axios.get('https://bw-how-to.herokuapp.com/guides', {
      headers: { authorization: token }
    })
      .then(res => {
        setGuides(res.data);
      })
      .catch(err => console.error(err));


  }, []); 

      return (
        <div className="homPage">
          <nav className="homePageNav">
            <div className="homePageDivLink">
              <NavLink className="homePageLink" to='/homepage'>Home Page</NavLink>
              <NavLink className="homePageLink" to='/#'>Profile</NavLink>
              <NavLink className="homePageLink" to='/search'>Search</NavLink>
            </div>
          </nav>
          {guides.map( guide =>
            <div className="card" key={guide.id} >
              <h2>{guide.title}</h2>

              <h3 className="h3Description">{guide.description}</h3>
              <h3 className="h3Catagory">Catagory: {guide.type}</h3>
              <h3 className="h3Creator">Creator: {guide.username}</h3>

              <p>step 1: {guide.step_1}</p>
              <p>step 2: {guide.step_2}</p>
              <p>step 3: {guide.step_3}</p>
              <p>step 4: {guide.step_4}</p>
              <p>step 5: {guide.step_5}</p>

              <div className="iFrame-container">
                <iframe 
                  src={guide.link.substr(0, 24) + embed + guide.link.substr(32)}
                  frameBorder="0" 
                  allowFullScreen title="showvideo">
                </iframe>
              </div>
            </div>
          )}

          <div className="homPageCTA">
            <button  onClick={props.buttonHandler} className="button createGuide"type="button" name='create'>Create Guide</button>
            <button onClick={props.buttonHandler}  className="button searchGuide" type="button" name="find">Find Guide</button>

            
          </div>
        </div>
      );
    
};


export default HomePage;
