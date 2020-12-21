import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import Afsystem, {IAfsystemProps} from '../../../../entities/afsystem/afsystem';
import AfsystemDetail, {IAfsystemDetailProps} from '../../../../entities/afsystem/afsystem-detail';
import AfsystemUpdate, {IAfsystemUpdateProps} from '../../../../entities/afsystem/afsystem-update';
import AfsystemDeleteDialog from '../../../../entities/afsystem/afsystem-delete-dialog';

import Afsysmodule, {IAfsysmoduleProps} from '../../../../entities/afsysmodule/afsysmodule';
import AfsysmoduleDetail, {IAfsysmoduleDetailProps} from '../../../../entities/afsysmodule/afsysmodule-detail';
import AfsysmoduleUpdate, {IAfsysmoduleUpdateProps} from '../../../../entities/afsysmodule/afsysmodule-update';
import AfsysmoduleDeleteDialog from '../../../../entities/afsysmodule/afsysmodule-delete-dialog';

import Afworkflow, {IAfworkflowProps} from '../../../../entities/afworkflow/afworkflow';
import AfworkflowDetail, {IAfworkflowDetailProps} from '../../../../entities/afworkflow/afworkflow-detail';
import AfworkflowUpdate, {IAfworkflowUpdateProps} from '../../../../entities/afworkflow/afworkflow-update';
import AfworkflowDeleteDialog from '../../../../entities/afworkflow/afworkflow-delete-dialog';

import Afwfstate, {IAfwfstateProps} from '../../../../entities/afwfstate/afwfstate';
import AfwfstateDetail, {IAfwfstateDetailProps} from '../../../../entities/afwfstate/afwfstate-detail';
import AfwfstateUpdate, {IAfwfstateUpdateProps} from '../../../../entities/afwfstate/afwfstate-update';
import AfwfstateDeleteDialog from '../../../../entities/afwfstate/afwfstate-delete-dialog';

import Afwfaction, {IAfwfactionProps} from '../../../../entities/afwfaction/afwfaction';
import AfwfactionDetail, {IAfwfactionDetailProps} from '../../../../entities/afwfaction/afwfaction-detail';
import AfwfactionUpdate, {IAfwfactionUpdateProps} from '../../../../entities/afwfaction/afwfaction-update';
import AfwfactionDeleteDialog from '../../../../entities/afwfaction/afwfaction-delete-dialog';

import Afschedule, {IAfscheduleProps} from '../../../../entities/afschedule/afschedule';
import AfscheduleDetail, {IAfscheduleDetailProps} from '../../../../entities/afschedule/afschedule-detail';
import AfscheduleUpdate, {IAfscheduleUpdateProps} from '../../../../entities/afschedule/afschedule-update';
import AfscheduleDeleteDialog from '../../../../entities/afschedule/afschedule-delete-dialog';

import Afparamval, {IAfparamvalProps} from '../../../../entities/afparamval/afparamval';
import AfparamvalDetail, {IAfparamvalDetailProps} from '../../../../entities/afparamval/afparamval-detail';
import AfparamvalUpdate, {IAfparamvalUpdateProps} from '../../../../entities/afparamval/afparamval-update';
import AfparamvalDeleteDialog from '../../../../entities/afparamval/afparamval-delete-dialog';

import Afmsg, {IAfmsgProps} from '../../../../entities/afmsg/afmsg';
import AfmsgDetail, {IAfmsgDetailProps} from '../../../../entities/afmsg/afmsg-detail';
import AfmsgUpdate, {IAfmsgUpdateProps} from '../../../../entities/afmsg/afmsg-update';
import AfmsgDeleteDialog from '../../../../entities/afmsg/afmsg-delete-dialog';


import {AppLayoutContext} from '../../framework/app/AppLayout';


// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const AFMenuItems: Array<IAppRoute> = [
        {
			path: `${matchUrl}/afsystem`,
			linkedpathCreate: `${matchUrl}/afsystem/new`,
			linkedpathEdit: `${matchUrl}/afsystem/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afsystem/:id`,
			linkedpathDelete: `${matchUrl}/afsystem/:id/delete`,
			linkedpathList: `${matchUrl}/afsystem`,
			exact: true,
			title: "Sistem Tanım",   
			routeTarget: Afsystem,   
			routeTargetActionEdit:AfsystemDetail,
			routeTargetActionCreate:AfsystemUpdate,
			routeTargetActionUpdate:AfsystemUpdate,
			routeTargetActionList:Afsystem,
			routeTargetActionDelete:AfsystemDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afsysmodule`,
			linkedpathCreate: `${matchUrl}/afsysmodule/new`,
			linkedpathEdit: `${matchUrl}/afsysmodule/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afsysmodule/:id`,
			linkedpathDelete: `${matchUrl}/afsysmodule/:id/delete`,
			linkedpathList: `${matchUrl}/afsysmodule`,
			exact: true,
			title: "Modül Tanım",   
			routeTarget: Afsysmodule,   
			routeTargetActionEdit:AfsysmoduleDetail,
			routeTargetActionCreate:AfsysmoduleUpdate,
			routeTargetActionUpdate:AfsysmoduleUpdate,
			routeTargetActionList:Afsysmodule,
			routeTargetActionDelete:AfsysmoduleDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afworkflow`,
			linkedpathCreate: `${matchUrl}/afworkflow/new`,
			linkedpathEdit: `${matchUrl}/afworkflow/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afworkflow/:id`,
			linkedpathDelete: `${matchUrl}/afworkflow/:id/delete`,
			linkedpathList: `${matchUrl}/afworkflow`,
			exact: true,
			title: "İş Akışı Tanım",   
			routeTarget: Afworkflow,   
			routeTargetActionEdit:AfworkflowDetail,
			routeTargetActionCreate:AfworkflowUpdate,
			routeTargetActionUpdate:AfworkflowUpdate,
			routeTargetActionList:Afworkflow,
			routeTargetActionDelete:AfworkflowDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afwfstate`,
			linkedpathCreate: `${matchUrl}/afwfstate/new`,
			linkedpathEdit: `${matchUrl}/afwfstate/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afwfstate/:id`,
			linkedpathDelete: `${matchUrl}/afwfstate/:id/delete`,
			linkedpathList: `${matchUrl}/afwfstate`,
			exact: true,
			title: "İş Akışı-Durum Tanım",   
			routeTarget: Afwfstate,   
			routeTargetActionEdit:AfwfstateDetail,
			routeTargetActionCreate:AfwfstateUpdate,
			routeTargetActionUpdate:AfwfstateUpdate,
			routeTargetActionList:Afwfstate,
			routeTargetActionDelete:AfwfstateDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afwfaction`,
			linkedpathCreate: `${matchUrl}/afwfaction/new`,
			linkedpathEdit: `${matchUrl}/afwfaction/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afwfaction/:id`,
			linkedpathDelete: `${matchUrl}/afwfaction/:id/delete`,
			linkedpathList: `${matchUrl}/afwfaction`,
			exact: true,
			title: "İş Akışı-İşlem Tanım",   
			routeTarget: Afwfaction,   
			routeTargetActionEdit:AfwfactionDetail,
			routeTargetActionCreate:AfwfactionUpdate,
			routeTargetActionUpdate:AfwfactionUpdate,
			routeTargetActionList:Afwfaction,
			routeTargetActionDelete:AfwfactionDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afschedule`,
			linkedpathCreate: `${matchUrl}/afschedule/new`,
			linkedpathEdit: `${matchUrl}/afschedule/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afschedule/:id`,
			linkedpathDelete: `${matchUrl}/afschedule/:id/delete`,
			linkedpathList: `${matchUrl}/afschedule`,
			exact: true,
			title: "Takvim Tanım",   
			routeTarget: Afschedule,   
			routeTargetActionEdit:AfscheduleDetail,
			routeTargetActionCreate:AfscheduleUpdate,
			routeTargetActionUpdate:AfscheduleUpdate,
			routeTargetActionList:Afschedule,
			routeTargetActionDelete:AfscheduleDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afparamval`,
			linkedpathCreate: `${matchUrl}/afparamval/new`,
			linkedpathEdit: `${matchUrl}/afparamval/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afparamval/:id`,
			linkedpathDelete: `${matchUrl}/afparamval/:id/delete`,
			linkedpathList: `${matchUrl}/afparamval`,
			exact: true,
			title: "Parametre Tanım",   
			routeTarget: Afparamval,   
			routeTargetActionEdit:AfparamvalDetail,
			routeTargetActionCreate:AfparamvalUpdate,
			routeTargetActionUpdate:AfparamvalUpdate,
			routeTargetActionList:Afparamval,
			routeTargetActionDelete:AfparamvalDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/afmsg`,
			linkedpathCreate: `${matchUrl}/afmsg/new`,
			linkedpathEdit: `${matchUrl}/afmsg/:id/edit`,
			linkedpathUpdate: `${matchUrl}/afmsg/:id`,
			linkedpathDelete: `${matchUrl}/afmsg/:id/delete`,
			linkedpathList: `${matchUrl}/afmsg`,
			exact: true,
			title: "Mesaj Tanım",   
			routeTarget: Afmsg,   
			routeTargetActionEdit:AfmsgDetail,
			routeTargetActionCreate:AfmsgUpdate,
			routeTargetActionUpdate:AfmsgUpdate,
			routeTargetActionList:Afmsg,
			routeTargetActionDelete:AfmsgDeleteDialog,
			leaf: true
        }
    ]

    return AFMenuItems;
}

const AppModuleAF = (props: IAppLayoutProps) => {
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
        <div className="AppModuleAF">
            <h2>AppModuleAF</h2>
        </div>
    );

}
export default AppModuleAF; 