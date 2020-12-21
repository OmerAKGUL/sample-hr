// Import libraries: React
import React from "react";
// Import libraries: react-router
import { IAppLayoutProps } from './AppTypes';

export const AppBrandBar = (props: IAppLayoutProps) => {
  return (
    <div className="AppBrandBar">
      <h3 className="App-subtitle">{props.appsubtitle}</h3>
      <h2 className="App-clientinfo">{props.appclient}</h2>
    </div>
  );
}
