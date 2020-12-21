import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import Afetljobtype, {IAfetljobtypeProps} from '../../../../entities/afetljobtype/afetljobtype';
import AfetljobtypeDetail, {IAfetljobtypeDetailProps} from '../../../../entities/afetljobtype/afetljobtype-detail';
import AfetljobtypeUpdate, {IAfetljobtypeUpdateProps} from '../../../../entities/afetljobtype/afetljobtype-update';
import AfetljobtypeDeleteDialog from '../../../../entities/afetljobtype/afetljobtype-delete-dialog';
import {AppLayoutContext} from '../../framework/app/AppLayout';

// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const IWLMenuItems: Array<IAppRoute> = [
        {
			path: `${matchUrl}/afetljobtype`,
			linkedpathCreate: `${matchUrl}/afetljobtype/new`,
			linkedpathEdit: `${matchUrl}/afetljobtype/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afetljobtype/:id`,
			linkedpathDelete: `${matchUrl}/afetljobtype/:id/delete`,
			linkedpathList: `${matchUrl}/afetljobtype`,
			exact: true,
			title: "Özel Liste Aktarım",   
			routeTarget: Afetljobtype,   
			routeTargetActionEdit:AfetljobtypeDetail,
			routeTargetActionCreate:AfetljobtypeUpdate,
			routeTargetActionUpdate:AfetljobtypeUpdate,
			routeTargetActionList:Afetljobtype,
			routeTargetActionDelete:AfetljobtypeDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/iwl2/afetljobtype`,
			linkedpathCreate: `${matchUrl}/afetljobtype/new`,
			linkedpathEdit: `${matchUrl}/afetljobtype/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afetljobtype/:id`,
			linkedpathDelete: `${matchUrl}/afetljobtype/:id/delete`,
			linkedpathList: `${matchUrl}/afetljobtype`,
			exact: true,
		    title: "Liste Entegrasyon İzleme",
		    routeTarget: Afetljobtype, // ListIntegrationMonitor
			routeTargetActionEdit:AfetljobtypeDetail,
			routeTargetActionCreate:AfetljobtypeUpdate,
			routeTargetActionUpdate:AfetljobtypeUpdate,
			routeTargetActionList:Afetljobtype,
			routeTargetActionDelete:AfetljobtypeDeleteDialog,
			leaf: true
        }
    ]

    return IWLMenuItems;
}

const AppModuleIWL = (props: IAppLayoutProps) => {
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
        <div className="AppModuleIWL">
            <h2>AppModuleIWL</h2>
        </div>
    );

}
export default AppModuleIWL;