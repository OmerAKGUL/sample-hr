import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import Wlmwldata, {IWlmwldataProps} from '../../../../entities/wlmwldata/wlmwldata';
import WlmwldataDetail, {IWlmwldataDetailProps} from '../../../../entities/wlmwldata/wlmwldata-detail';
import WlmwldataUpdate, {IWlmwldataUpdateProps} from '../../../../entities/wlmwldata/wlmwldata-update';
import WlmwldataDeleteDialog from '../../../../entities/wlmwldata/wlmwldata-delete-dialog';
import {AppLayoutContext} from '../../framework/app/AppLayout';


// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const WLMMenuItems: Array<IAppRoute> = [
	{
			path: `${matchUrl}/wlmwldata`,
			linkedpathCreate: `${matchUrl}/wlmwldata/new`,
			linkedpathEdit: `${matchUrl}/wlmwldata/:id/edit`,
			linkedpathUpdate: `${matchUrl}/wlmwldata/:id`,
			linkedpathDelete: `${matchUrl}/wlmwldata/:id/delete`,
			linkedpathList: `${matchUrl}/wlmwldata`,
			exact: true,
			title: "İzleme Listesi Tanım",   
			routeTarget: Wlmwldata,   
			routeTargetActionEdit:WlmwldataDetail,
			routeTargetActionCreate:WlmwldataUpdate,
			routeTargetActionUpdate:WlmwldataUpdate,
			routeTargetActionList:Wlmwldata,
			routeTargetActionDelete:WlmwldataDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/wlm2`,
			linkedpathCreate: `${matchUrl}/wlmwldata/new`,
			linkedpathEdit: `${matchUrl}/wlmwldata/:id/edit`,
			linkedpathUpdate: `${matchUrl}/wlmwldata/:id`,
			linkedpathDelete: `${matchUrl}/wlmwldata/:id/delete`,
			linkedpathList: `${matchUrl}/wlmwldata`,
			exact: true,
		    title: "İzleme Listesi İş Akış",
		    routeTarget: Wlmwldata, 
			routeTargetActionEdit:WlmwldataDetail,
			routeTargetActionCreate:WlmwldataUpdate,
			routeTargetActionUpdate:WlmwldataUpdate,
			routeTargetActionList:Wlmwldata,
			routeTargetActionDelete:WlmwldataDeleteDialog,
			leaf: true
        }
    ]

    return WLMMenuItems;
}

const AppModuleWLM = (props: IAppLayoutProps) => {
    const {setMainRouting, setMsgBarMsg, getALState, setDSelectorOpen } = React.useContext(AppLayoutContext);
    const { match } = props;
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
        <div className="AppModuleWLM">
            <h2>AppModuleWLM</h2>
        </div>
    );

}
export default AppModuleWLM;