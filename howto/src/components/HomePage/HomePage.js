import React, {useState, useEffect} from 'react';
import Axios from 'axios';


import homePage from './homePage.scss';

const HomePage = () => {
  const [guides, setGuides] = useState([])
  console.log(guides);
  const embed = 'embed/';
  useEffect(() => {
    const token = localStorage.getItem('token');
    Axios.get('https://bw-how-to.herokuapp.com/guides', {
      headers: { authorization: token }
    })
      .then(res => {
        //console.log(res.data);
        setGuides(res.data);
      })
      .catch(err => console.error(err));


  }, []); 

      return (
        <div className="homPage">
          <h1>HomePage</h1>
          <h3>Hello 'userName'</h3>
          {guides.map( guide =>
            <div className="card" key={guide.id} >
              <h2>title: {guide.title}</h2>
              <h3>{guide.description}</h3>
              <h3>Catagory: {guide.type}</h3>
              <p>step: {guide.step_1}</p>
              <p>step: {guide.step_2}</p>
              <p>step: {guide.step_3}</p>
              <p>step: {guide.step_4}</p>
              <p>step: {guide.step_5}</p>

              <iframe width="853" height="480" 
              src={guide.link.substr(0, 24) + embed + guide.link.substr(32)}
              frameBorder="0" 
              allowFullScreen title="showvideo"></iframe>
            </div>
            )}

        </div>
      );
    
};


export default HomePage;
