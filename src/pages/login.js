import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';

//MUI
import Card from '@material-ui/core/Card';

const styles = {
    root: {
        backgroundColor: "#dbd1d1",
        maxWidth: 500,
        margin: "0 auto"
    }
};

export class login extends Component {
  render() {
  const { classes } = this.props;
    return (
        <Card className={classes.root}>
        <h1>Login</h1>
      </Card>
    );
  }
}

// login.propTypes = {
//     classes: PropTypes.object.isRequired
// }


export default withStyles(styles)(login);
