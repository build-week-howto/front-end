import React from 'react';
import './homepagecards.scss';

import { Grid, Card } from 'semantic-ui-react';

const HomePageCards = props => {
  console.log(props);
  return (
    <Grid.Column>
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className='date'>Species: {props.type}</span>
        </Card.Meta>
        <Card.Description>
          Location: {props.step_1}
          <br />
          Origin: {props.step_2}
        </Card.Description>
      </Card>
    </Grid.Column>
  );
};

export default HomePageCards;
