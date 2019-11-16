import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '1em',
    maxWidth: '95%',
    margin: "0 auto",
  },
  content: {
    paddingBottom: "16px !important",
  }
}));

export default function MyCard(props) {
  const classes = useStyles();
  const text = props.text;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}