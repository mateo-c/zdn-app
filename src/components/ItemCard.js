import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import dayjs from 'dayjs';

//MUI

const styles = {
  root: {
    display: "flex",
    marginBottom: 20,
  },
};

class ItemCard extends Component {
  render() {
    const {
      classes,
      item: { name, quantity, chekinAt },
    } = this.props;
    return (
      <Card className={classes.root}>
        <h5>
          {name} - <span>Cant: {quantity}</span> - <span>Ingreso:{dayjs(chekinAt).format('DD/MM/YYYY')}</span>
        </h5>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
