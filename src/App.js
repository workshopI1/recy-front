import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {primary, secondary} from "./shared/colors";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";


const theme = createMuiTheme({
    palette:{
        primary : {
            main : primary
        },
        secondary : {
            main : secondary
        },
    }
});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
  </ThemeProvider>

  );
}

export default App;
