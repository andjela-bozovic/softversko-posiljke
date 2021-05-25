import React, { Component } from 'react';
import '../views/orderitem.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class OrderItem extends Component {
  render () {
    return (
      <Card className="root" variant="outlined">
          <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
              Posiljalac: { this.props.sender }
              </Typography>
              <Typography variant="body2" component="p">
              Mjesto: { this.props.place }
              <br />
              Cijena: { this.props.price }
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant="contained" size="small">Pogledaj</Button>
          </CardActions>
      </Card>
    );
  }
}

export default OrderItem