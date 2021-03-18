// Import libraries: React
import React, {useState,useEffect} from "react";
// Import libraries: react-router
import { Link } from 'react-router-dom';
// import app types
import {IAppLayoutProps,AppLayoutState} from './AppTypes';
// import app context
import {AppLayoutContext} from './AppLayout';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const apiUrl = 'http://localhost:9000/api/vuserroleswebapis' ;
const apiUserInfo = "admin:admin"
let counter = 0;
// AppSidebarLeft component: implements left sidebar navigation history, state and options..
export const AppSidebarLeft = (props) => {
  return (
          <div className="AppSidebarLeft">
            <AppNavMenu {...props}/>
          </div>
        );
}

// handler for navigation menu clicks
const onClickAppNavMenu=(changeALState,url:string)=>{
  if(changeALState)
    changeALState(AppLayoutState.INITIALIZED);
}

// application navigation component
export const AppNavMenu = (props) => {
  
  const [resultMenu,setResultMenu]=useState('0');
  // get app context
  const {currentMainRouting,changeALState} = React.useContext(AppLayoutContext);
  // check app context availity
  if(!currentMainRouting)
    return <div>Current routing is empty. Initialize current routing from AppRouteConfig</div>;

  // get current menu select match
  const {match} = props;

  // generate list of menus from current routing data
  const routes  = currentMainRouting;
  const links = routes.map((item,index) => {
    // authorization control wep api
    counter = counter + 1;
    let menuListForUser = "";
    if( counter === 1 )
    { 
      axios({
      method: 'get',
      url: apiUrl,
      headers: {"Authorization": "Basic " + btoa(apiUserInfo)}
      })
      .then(function (response) {
            console.warn(response.data);
        for (let i = 0; i < response.data.length; i++) {
            if( window.sessionStorage.getItem("accountIdForMenu").toString() === response.data[i]['userId'].toString())
            { 
              menuListForUser = menuListForUser + " - " + response.data[i]['moduleName'].toString()+ " ; " + response.data[i]['menuName'].toString()+ " ; " + response.data[i]['actionName'].toString();
            }
          }
          setResultMenu(menuListForUser);
      })
      .catch(function (response) {
        console.warn(response);
      });
    } 
    const k = "l0."+index;
    window.sessionStorage.setItem("createUpdateDeleteAuth",resultMenu);
    return <li key={k} hidden={resultMenu.includes(item.title) ? false : false}
              onClick ={()=>onClickAppNavMenu(changeALState,match.url)}>
              <Link to={item.path}>{item.title}</Link>
          </li>;
  });

  return (
          <div className="AppNavMenu">
            <ul className="AppNavLinksList" >{links}</ul>
          </div>
    );
}
