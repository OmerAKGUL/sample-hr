// Import libraries: React
import React, {useEffect} from "react";
// Import libraries: react-router
import { Link } from 'react-router-dom';
// import app types
import {IAppLayoutProps,AppLayoutState} from './AppTypes';
// import app context
import {AppLayoutContext} from './AppLayout';

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
  // get app context
  const {currentMainRouting,changeALState} = React.useContext(AppLayoutContext);
  // check app context availity
  if(!currentMainRouting)
    return <div>Current routing is empty. Initialize current routing from AppRouteConfig</div>;

  // get current menu select match
  const {match} = props;

  // generate list of menus from current routing data
  const routes  = currentMainRouting;
  const links = routes.map( (item,index) => {
    const k = "l0."+index;
    return <li key={k}
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
