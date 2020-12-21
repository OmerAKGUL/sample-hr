import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import Afsrole, {IAfsroleProps} from '../../../../entities/afsrole/afsrole';
import AfsroleDetail, {IAfsroleDetailProps} from '../../../../entities/afsrole/afsrole-detail';
import AfsroleUpdate, {IAfsroleUpdateProps} from '../../../../entities/afsrole/afsrole-update';
import AfsroleDeleteDialog from '../../../../entities/afsrole/afsrole-delete-dialog';

import Afsroleusers, {IAfsroleuserProps} from '../../../../entities/afsroleuser/afsroleuser';
import AfsroleusersDetail, {IAfsroleuserDetailProps} from '../../../../entities/afsroleuser/afsroleuser-detail';
import AfsroleusersUpdate, {IAfsroleuserUpdateProps} from '../../../../entities/afsroleuser/afsroleuser-update';
import AfsroleusersDeleteDialog from '../../../../entities/afsroleuser/afsroleuser-delete-dialog';

import Afsauthorization, {IAfsauthorizationProps} from '../../../../entities/afsauthorization/afsauthorization';
import AfsauthorizationDetail, {IAfsauthorizationDetailProps} from '../../../../entities/afsauthorization/afsauthorization-detail';
import AfsauthorizationUpdate, {IAfsauthorizationUpdateProps} from '../../../../entities/afsauthorization/afsauthorization-update';
import AfsauthorizationDeleteDialog from '../../../../entities/afsauthorization/afsauthorization-delete-dialog';

import {AppLayoutContext} from '../../framework/app/AppLayout';

// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const AFSMenuItems: Array<IAppRoute> = [
        {
			path: `${matchUrl}/afsrole`,
			linkedpathCreate: `${matchUrl}/afsrole/new`,
			linkedpathEdit: `${matchUrl}/afsrole/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afsrole/:id`,
			linkedpathDelete: `${matchUrl}/afsrole/:id/delete`,
			linkedpathList: `${matchUrl}/afsrole`,
			exact: true,
			title: "Rol Tanım",   
			routeTarget: Afsrole,   
			routeTargetActionEdit:AfsroleDetail,
			routeTargetActionCreate:AfsroleUpdate,
			routeTargetActionUpdate:AfsroleUpdate,
			routeTargetActionList:Afsrole,
			routeTargetActionDelete:AfsroleDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afsroleuser`,
			linkedpathCreate: `${matchUrl}/afsroleuser/new`,
			linkedpathEdit: `${matchUrl}/afsroleuser/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afsroleuser/:id`,
			linkedpathDelete: `${matchUrl}/afsroleuser/:id/delete`,
			linkedpathList: `${matchUrl}/afsroleuser`,
			exact: true,
			title: "Kullanıcı Tanım",   
			routeTarget: Afsroleusers,   
			routeTargetActionEdit:AfsroleusersDetail,
			routeTargetActionCreate:AfsroleusersUpdate,
			routeTargetActionUpdate:AfsroleusersUpdate,
			routeTargetActionList:Afsroleusers,
			routeTargetActionDelete:AfsroleusersDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afsauthorization`,
			linkedpathCreate: `${matchUrl}/afsauthorization/new`,
			linkedpathEdit: `${matchUrl}/afsauthorization/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afsauthorization/:id`,
			linkedpathDelete: `${matchUrl}/afsauthorization/:id/delete`,
			linkedpathList: `${matchUrl}/afsauthorization`,
			exact: true,
			title: "Yetkilendirme Tanım",   
			routeTarget: Afsauthorization,   
			routeTargetActionEdit:AfsauthorizationDetail,
			routeTargetActionCreate:AfsauthorizationUpdate,
			routeTargetActionUpdate:AfsauthorizationUpdate,
			routeTargetActionList:Afsauthorization,
			routeTargetActionDelete:AfsauthorizationDeleteDialog,
			leaf: true
        }
    ]

    return AFSMenuItems;
}

const AppModuleAFS = (props: IAppLayoutProps) => {
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
        <div className="AppModuleAFS">
            <h2>AppModuleAFS</h2>
        </div>
    );

}
export default AppModuleAFS;