import React, {useEffect, useState, useRef} from 'react';
// import { connect } from 'react-redux';
import {IAppLayoutProps,AppMsgType,AppLayoutState} from '../../framework/app/AppTypes';
import {IAppRoute} from '../../framework/app/IAppRoute';
// import leaf route targets
import Department, {IDepartmentProps} from '../../../../entities/department/department';
import DepartmentDetail, {IDepartmentDetailProps} from '../../../../entities/department/department-detail';
import DepartmentUpdate, {IDepartmentUpdateProps} from '../../../../entities/department/department-update';
import DepartmentDeleteDialog from '../../../../entities/department/department-delete-dialog';
import {AppLayoutContext} from '../../framework/app/AppLayout';


// Define submodule components
export const SampleModuleSubModule2=(props)=>{

  return (
    <div className="SampleModule_SubModule2">
      <h2>Wellcome to SampleModule_SubModule2</h2>
      <p>This is SampleModule_SubModule2...</p>
    </div>
    );
}
export const SampleModuleSubModule3=(props)=>{
  return (
    <div className="SampleModule_SubModule3">
      <h2>Wellcome to SampleModule_SubModule3</h2>
      <p>This is SampleModule_SubModule3...</p>
    </div>
    );
}

// define application menu items for module
const getMenuItems=(matchUrl:string)=>{
    const SampleModuleMainMenuItems: Array<IAppRoute> = [
    {
      path: `${matchUrl}/department`,
      linkedpathCreate: `${matchUrl}/department/new`,
      linkedpathEdit: `${matchUrl}/department/:id/edit`,
      linkedpathUpdate: `${matchUrl}/department/:id`,
      linkedpathDelete: `${matchUrl}/department/:id/delete`,
      linkedpathList: `${matchUrl}/department`,
      exact: true,
      title: "Department Entry",
      routeTarget:Department,
      routeTargetActionEdit:DepartmentDetail,
      routeTargetActionCreate:DepartmentUpdate,
      routeTargetActionUpdate:DepartmentUpdate,
      routeTargetActionList:Department,
      routeTargetActionDelete:DepartmentDeleteDialog,
      leaf: true,
    },
    {
      path: `${matchUrl}/submodule2`,
      exact: false,
      title: "SampleModule SubModule2",
      routeTarget: SampleModuleSubModule2
    },
    {
      path: `${matchUrl}/submodule3`,
      exact: false,
      title: "SampleModule SubModule3",
      routeTarget: SampleModuleSubModule3
    }
  ]

  return SampleModuleMainMenuItems;
}

// define module component
const AppModuleSample=(props:IAppLayoutProps)=> {
  const {setMainRouting, setMsgBarMsg, getALState, setDSelectorOpen } = React.useContext(AppLayoutContext);

  const {match} = props;
  // after nav menu loaded, set main routing menus for the module
  useEffect(
    ()=>{
      // do not render when app state is not initialized..
      if(getALState()!==AppLayoutState.INITIALIZED)
        return;

      // set main navmenu for the module
      if(setMainRouting) {
        setMainRouting(getMenuItems(match.url));
      }
      // set message bar message
      if(setMsgBarMsg)
      setMsgBarMsg("AppModuleSample is loaded ...",AppMsgType.INFO );
    }
  ,[])

  // generate module component
  return (
    <div className="AppModuleSample">
      <h2>Wellcome to AppModuleSample</h2>
      <p>This is AppModuleSample: you have 3 options:...</p>
      <h3>SampleModule_SubModule1</h3>
      <h3>SampleModule_SubModule2</h3>
      <h3>SampleModule_SubModule3</h3>
      <button onClick={()=>{setDSelectorOpen(true)}}>Open Data Selector</button>
    </div>
    );

}
export default AppModuleSample;
