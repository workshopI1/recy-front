import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {primary, secondary} from "./shared/colors";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CameraHandler from "./components/cameraHandler";
import Recycling from "./components/Recycling/Recycling";
import ScanIA from "./components/ScanIA/ScanIA";
import HomeAppBar from "./components/Home/HomeAppBar";
import PageScanIA from "./components/ScanIA/PageScanIA";


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
        {/*<HomeAppBar/>*/}
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/scan'>
                    <CameraHandler/>
                </Route>
                <Route path='/recycling' render={(props) => (<Recycling {...props}/>)}/>
                <Route path='/list' component={ScanIA}/>
                <Route path='/scanIA' render={(props) => (<PageScanIA{...props}/>)}/>
            </Switch>
        </Router>
    </div>
  </ThemeProvider>

  );
}

export default App;
