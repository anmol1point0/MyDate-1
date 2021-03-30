import React from "react";
import Deck from "./components/Deck"

import { CssBaseline } from '@material-ui/core';
import Index from './components/Index';
import Main from './components/Main.jsx';
import Demo from './components/Demo';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App()
{
    // return <Deck />;
    return (
        <div >
            <CssBaseline />
            <BrowserRouter>
             <Switch>
                <Route path = "/" exact component = {Index} />
                <Route path = "/main" component = {Main} />
                <Route path="/demo" component = {Demo} />
             </Switch>
             </BrowserRouter>   
        </div>
      );
}
export default App;
