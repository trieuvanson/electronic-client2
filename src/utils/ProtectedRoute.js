import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {getUser} from "./Common";

function ProtectedRoute(props) {
    let Cmp = props.Cpm;
    const history = useHistory();
    useEffect(() => {
        if (!getUser()) {
            history.push("/register")
        }
    })
    return (
        <></>
    )
}

export default ProtectedRoute;