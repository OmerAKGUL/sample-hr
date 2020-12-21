// Import libraries: React
import React, {useEffect,useState} from "react";
// Import libraries: react-router
import { Route, Switch } from 'react-router-dom';

import ErrorBoundaryRoute from '../../../../shared/error/error-boundary-route';
import {AppLayoutContext} from './AppLayout';

// define app layout component which renders main target component of currently selected menu items
export const AppRouteTarget = (props) => {

  // const {match,listEntities} = props;
  const {currentMainRouting} = React.useContext(AppLayoutContext);
  const leftNavLinks = currentMainRouting;

  // handle initial state
  if(!leftNavLinks||leftNavLinks.length<=0)
    return <div className="AppRouteTarget"><p>No target component. Select a link from menu.. </p></div>;

  // update left nav menu if provided
  const routeTargetList = leftNavLinks.map( (item,index) => {
      const k = "RT."+index;
      // create main route target component
      if(item.routeTarget) {
        if(!item.leaf)
        return <ErrorBoundaryRoute key={k}
                path={item.path}
                exact={item.exact}
                component={(cprops) =>
                <div className="targetMain">
                  <item.routeTarget {...cprops}/>
                </div>
                }
              />
        else
        return <ErrorBoundaryRoute key={k}
                path={item.path}
                exact={item.exact}
                component={item.routeTarget}
              />
      }
      else {
            return <Route key={k} path={item.path} exact={item.exact}>
                    <p>item not defined for path {item.path}</p>
                   </Route>;
    }
  });

  // create ActionCreate handler component
  const routeTargetActCreateList = leftNavLinks.map( (item,index) => {
      const k = "RT.Create."+index;
      // create main route target component
      if(item.routeTargetActionCreate)
        return <ErrorBoundaryRoute key={k}
                path={item.linkedpathCreate}
                exact={item.exact}
                component={item.routeTargetActionCreate}/>
 });


  // create ActionEdit handler component
  const routeTargetActEditList = leftNavLinks.map( (item,index) => {
      const k = "RT.Edit."+index;
      // create main route target component
      if(item.routeTargetActionEdit)
        return <ErrorBoundaryRoute key={k}
                path={item.linkedpathEdit}
                exact={item.exact}
                component={item.routeTargetActionEdit}/>
 });

  // create ActionUpdate handler component
  const routeTargetActUpdateList = leftNavLinks.map( (item,index) => {
      const k = "RT.Update."+index;
      // create main route target component
      if(item.routeTargetActionUpdate)
        return <ErrorBoundaryRoute key={k}
                path={item.linkedpathUpdate}
                exact={item.exact}
                component={item.routeTargetActionUpdate}/>
 });

 // create ActionUpdate handler component
 const routeTargetActDeleteList = leftNavLinks.map( (item,index) => {
     const k = "RT.Delete."+index;
     // create main route target component
     if(item.routeTargetActionDelete)
       return <ErrorBoundaryRoute key={k}
               path={item.linkedpathDelete}
               exact={item.exact}
               component={item.routeTargetActionDelete}/>
});

  // define route target components styling
  const routeTargetStyle = {
    color: 'blue',
    overflow: 'auto',
  };

  // post render side effects
  useEffect(()=>{
  },[])

  // generate target routing switch
  return (
        <div id="AppRouteTarget" className="AppRouteTarget" style={routeTargetStyle} >
          <Switch>
            {routeTargetList}
            {routeTargetActCreateList}
            {routeTargetActEditList}
            {routeTargetActUpdateList}
            {routeTargetActDeleteList}
          </Switch>
        </div>
      );
}

export default AppRouteTarget;
