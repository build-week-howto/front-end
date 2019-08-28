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
          <span className='date'>Type: {props.type}</span>
        </Card.Meta>
        <Card.Description>
          Step 1: {props.step_1}
          <br />
          Step 2: {props.step_2}
          <br />
          Step 3: {props.step_3}
          <br />
          Step 4: {props.step_4}
          <br />
          Step 5: {props.step_5}
        </Card.Description>
        <span className='date'>User: {props.username}</span>
      </Card>
    </Grid.Column>
  );
};

export default HomePageCards;
