import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import Itxtxnqueue, {IItxtxnqueueProps} from '../../../../entities/itxtxnqueue/itxtxnqueue';
import ItxtxnqueueDetail, {IItxtxnqueueDetailProps} from '../../../../entities/itxtxnqueue/itxtxnqueue-detail';
import ItxtxnqueueUpdate, {IItxtxnqueueUpdateProps} from '../../../../entities/itxtxnqueue/itxtxnqueue-update';
import ItxtxnqueueDeleteDialog from '../../../../entities/itxtxnqueue/itxtxnqueue-delete-dialog';
import {AppLayoutContext} from '../../framework/app/AppLayout';


// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const ITXMenuItems: Array<IAppRoute> = [
        {
            path: `${matchUrl}/itxtxnqueue`,
            exact: true,
            title: "İşlem Entegrasyon İzleme",
			linkedpathCreate: `${matchUrl}/itxtxnqueue/new`,
			linkedpathEdit: `${matchUrl}/itxtxnqueue/:id/edit`,
			linkedpathUpdate: `${matchUrl}/itxtxnqueue/:id`,
			linkedpathDelete: `${matchUrl}/itxtxnqueue/:id/delete`,
			linkedpathList: `${matchUrl}/itxtxnqueue`,
			routeTarget: Itxtxnqueue,   
			routeTargetActionEdit:ItxtxnqueueDetail,
			routeTargetActionCreate:ItxtxnqueueUpdate,
			routeTargetActionUpdate:ItxtxnqueueUpdate,
			routeTargetActionList:Itxtxnqueue,
			routeTargetActionDelete:ItxtxnqueueDeleteDialog,
			leaf: true
        },
        {
            path: `${matchUrl}/itxtxnqueue`,
            exact: true,
            title: "İşlem Entegrasyon Rapor",
			linkedpathCreate: `${matchUrl}/itxtxnqueue/new`,
			linkedpathEdit: `${matchUrl}/itxtxnqueue/:id/edit`,
			linkedpathUpdate: `${matchUrl}/itxtxnqueue/:id`,
			linkedpathDelete: `${matchUrl}/itxtxnqueue/:id/delete`,
			linkedpathList: `${matchUrl}/itxtxnqueue`,
			routeTarget: Itxtxnqueue,   
			routeTargetActionEdit:ItxtxnqueueDetail,
			routeTargetActionCreate:ItxtxnqueueUpdate,
			routeTargetActionUpdate:ItxtxnqueueUpdate,
			routeTargetActionList:Itxtxnqueue,
			routeTargetActionDelete:ItxtxnqueueDeleteDialog,
			leaf: true
        }
    ]

    return ITXMenuItems;
}

const AppModuleITX = (props: IAppLayoutProps) => {
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
        <div className="AppModuleITX">
            <h2>AppModuleITX</h2>
        </div>
    );

}
export default AppModuleITX;