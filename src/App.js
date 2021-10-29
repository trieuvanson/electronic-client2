import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import Header from "./components/header/Header";
import Pages from "./components/mainpages/Pages";


function App() {
    return (
        <DataProvider>
            <Router>
                <Header/>
                <Pages/>
            </Router>
        </DataProvider>
    );
}

export default App;
