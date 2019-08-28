import React from 'react';
import './homepagecards.scss';

import { Grid, Card } from 'semantic-ui-react';

const HomePageCards = props => {
  console.log(props);
  return (
    <Grid.Column>
      <Card>
        <Card.Header className='title'>{props.title}</Card.Header>
        <Card.Meta>
          <span className='category'>Category: {props.type}</span>
        </Card.Meta>
        <Card.Description>
          <strong>Step 1:</strong> {props.step_1}
          <br />
          <strong>Step 2:</strong> {props.step_2}
          <br />
          <strong>Step 3:</strong> {props.step_3}
          <br />
          <strong>Step 4:</strong> {props.step_4}
          <br />
          <strong>Step 5:</strong> {props.step_5}
        </Card.Description>
        <span className='user'>User: {props.username}</span>
      </Card>
    </Grid.Column>
  );
};

export default HomePageCards;
