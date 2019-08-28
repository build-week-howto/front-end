import React from 'react';
import './homepagecards.scss';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const HomePageCards = props => {
  console.log(props);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <Card className={classes.card}>
      <CardHeader title={props.title} subheader={`User: ${props.username}`} />
      <CardMedia
        className={classes.media}
        image='https://source.unsplash.com/1600x900/?crafts'
        title={props.title}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            <strong>Step 1:</strong>
            {props.step_1}
          </Typography>
          <Typography paragraph>
            <strong>Step 2:</strong>
            {props.step_2}
          </Typography>
          <Typography paragraph>
            <strong>Step 3:</strong>
            {props.step_3}
          </Typography>
          <Typography>
            <strong>Step 4:</strong>
            {props.step_4}
          </Typography>
          <Typography>
            <strong>Step 5:</strong>
            {props.step_5}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default HomePageCards;
