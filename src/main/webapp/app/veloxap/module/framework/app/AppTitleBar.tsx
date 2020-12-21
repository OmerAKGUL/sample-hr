// Import libraries: React
import React from "react";
// Import libraries: react-router
import constants from '../../../config/constants';

export const AppTitleBar = () => {
    return (
        <div className="AppTitleBar">
            <h3 className="App-subtitle">{constants.APPSUBTITLE}</h3>
            <h2 className="App-clientinfo">{constants.APPCLIENT}</h2>
        </div>
    );
}