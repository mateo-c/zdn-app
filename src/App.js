import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from "./components/Navbar";
//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import inventory from "./pages/inventory";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typpgraphy: {
    useNextVariants: true
  }
});
 
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/inventory" component={inventory} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
