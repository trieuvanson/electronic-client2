import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import Header from "./components/header/Header";
import Pages from "./components/mainpages/Pages";
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
    return (
        <DataProvider>
            <Router>
                <Header/>
                <Pages/>

            </Router>
            {/* <MessengerCustomerChat
                pageId="104628158689139"
                appId="587032069214570"
            /> */}
        </DataProvider>
    );
}

export default App;
