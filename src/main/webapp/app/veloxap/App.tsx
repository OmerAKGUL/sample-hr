// Import libraries: react
import React from 'react';
// Import libraries: react-router
import { BrowserRouter } from 'react-router-dom';

// import layouts
import { IAppProps } from './module/framework/app/AppTypes';
import { AppLayout } from './module/framework/app/AppLayout';
// resource libraries
import './App.css';	   
import applogo from './shared/resource/icons/applogo.png';
import clientlogo from './shared/resource/icons/clientlogo.png';
// import app config information
import config from "./config/constants";

// define application component
const App = (props: IAppProps) => {
  // props.applogo = applogo;
  // props.clientlogo = clientlogo;
  // props.apptitle = {config.APPTITLE};
  /* props.appversion = config.VERSION;
  props.appsubtitle = config.APPSUBTITLE;
  props.appclient = config.APPCLIENT;*/

  // console.log("App:render");
  return (
    <div className="VeloxApp">
      <BrowserRouter>
        <AppLayout {...props}
          apptitle={config.APPTITLE} appsubtitle={config.APPSUBTITLE}
          appclient={config.APPCLIENT} />
      </BrowserRouter>
    </div>
  );
}
export default App;
