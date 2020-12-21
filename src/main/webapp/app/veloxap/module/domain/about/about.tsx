import React, {useState,useEffect} from 'react';
import {IAppLayoutProps,IAppLayoutPropsNoRoute,AppLayoutState} from '../../framework/app/AppTypes';

import Employee, {IEmployeeProps} from '../../../../entities/employee/employee';
import Department, {IDepartmentProps} from '../../../../entities/department/department';
import {getEntities} from '../../../../entities/department/department.reducer';

// define application menu routing target components
export interface SampleJhipsterCompProps extends IAppLayoutPropsNoRoute, IDepartmentProps {}

const AppModuleAbout=  (props)=> {

  useEffect(()=>{
    // getEntities();
  })

  return (
    <div className="AppModuleAbout">
      <h2>AppModuleAbout</h2>
      <button onClick={()=>{props.getEntities()}}>load</button>
      <Department {...props}/>
    </div>
  );
  // <button onClick={()=>props.getEntities()}>List</button>

};

export default AppModuleAbout;

/*
getTargetLeftNavMenu= (props:IRouteTargetSelectorProps)=>{
  const routes : Array<IAppRoute> = [
    {
      path: `${props.match.url}/about-child1`,
      exact: false,
      title: "About-child1",
      routeTargetSelector: new About1()
    },
    {
      path: `${props.match.url}/about-child2`,
      exact: false,
      title: "About-child2",
      routeTargetSelector: new About2()
    },
    {
      path: `${props.match.url}/about-child3`,
      exact: false,
      title: "About-child3",
      routeTargetSelector: new About3()
    }
  ];

  return routes;
};

*/
