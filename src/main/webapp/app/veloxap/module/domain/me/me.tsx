import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';

import MEConfig, {IMeconfigProps} from '../../../../entities/meconfig/meconfig';
import MEConfigDetail, {IMeconfigDetailProps} from '../../../../entities/meconfig/meconfig-detail';
import MEConfigUpdate, {IMeconfigUpdateProps} from '../../../../entities/meconfig/meconfig-update';
import MEConfigDeleteDialog from '../../../../entities/meconfig/meconfig-delete-dialog';

import MEInvestProfile, {IMeinvestprofileProps} from '../../../../entities/meinvestprofile/meinvestprofile';
import MEInvestProfileDetail, {IMeinvestprofileDetailProps} from '../../../../entities/meinvestprofile/meinvestprofile-detail';
import MEInvestProfileUpdate, {IMeinvestprofileUpdateProps} from '../../../../entities/meinvestprofile/meinvestprofile-update';
import MEInvestProfileDeleteDialog from '../../../../entities/meinvestprofile/meinvestprofile-delete-dialog';

import MEMatchResult, {IMematchresultProps} from '../../../../entities/mematchresult/mematchresult';
import MEMatchResultDetail, {IMematchresultDetailProps} from '../../../../entities/mematchresult/mematchresult-detail';
import MEMatchResultUpdate, {IMematchresultUpdateProps} from '../../../../entities/mematchresult/mematchresult-update';
import MEMatchResultDeleteDialog from '../../../../entities/mematchresult/mematchresult-delete-dialog';

import {AppLayoutContext} from '../../framework/app/AppLayout';

export const ListCompareConfiguration = (props) => {

    return (
        <div className="ListCompareConfiguration">
            <h2>Liste Karşılaştırma Konfigürasyon</h2>
        </div>
    );
}

export const InvestigationProfileDefinition
    = (props) => {
        return (
            <div className="InvestigationProfileDefinition">
                <h2>İnceleme Profili Tanım</h2>
            </div>
        );
    }

export const SuspiciousTransactions = (props) => {

    return (
        <div className="SuspiciousTransactions">
            <h2>Şüpheli İşlemler</h2>
        </div>
    );
}

// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const MEMenuItems: Array<IAppRoute> = [
        {
			path: `${matchUrl}/meconfig`,
			linkedpathCreate: `${matchUrl}/meconfig/new`,
			linkedpathEdit: `${matchUrl}/meconfig/:id/edit`,
			linkedpathUpdate: `${matchUrl}/meconfig/:id`,
			linkedpathDelete: `${matchUrl}/meconfig/:id/delete`,
			linkedpathList: `${matchUrl}/meconfig`,
			exact: true,
			title: "Liste Karşılaştırma Konfigürasyon",   
			routeTarget: MEConfig,   
			routeTargetActionEdit:MEConfigDetail,
			routeTargetActionCreate:MEConfigUpdate,
			routeTargetActionUpdate:MEConfigUpdate,
			routeTargetActionList:MEConfig,
			routeTargetActionDelete:MEConfigDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/meinvestprofile`,
			linkedpathCreate: `${matchUrl}/meinvestprofile/new`,
			linkedpathEdit: `${matchUrl}/meinvestprofile/:id/edit`,
			linkedpathUpdate: `${matchUrl}/meinvestprofile/:id`,
			linkedpathDelete: `${matchUrl}/meinvestprofile/:id/delete`,
			linkedpathList: `${matchUrl}/meinvestprofile`,
			exact: true,
			title: "İnceleme Profili Tanım",   
			routeTarget: MEInvestProfile,   
			routeTargetActionEdit:MEInvestProfileDetail,
			routeTargetActionCreate:MEInvestProfileUpdate,
			routeTargetActionUpdate:MEInvestProfileUpdate,
			routeTargetActionList:MEInvestProfile,
			routeTargetActionDelete:MEInvestProfileDeleteDialog,
			leaf: true
        },
        {
			path: `${matchUrl}/mematchresult`,
			linkedpathCreate: `${matchUrl}/mematchresult/new`,
			linkedpathEdit: `${matchUrl}/mematchresult/:id/edit`,
			linkedpathUpdate: `${matchUrl}/mematchresult/:id`,
			linkedpathDelete: `${matchUrl}/mematchresult/:id/delete`,
			linkedpathList: `${matchUrl}/mematchresult`,
			exact: true,
			title: "Şüpheli İşlemler",   
			routeTarget: MEMatchResult,   
			routeTargetActionEdit:MEMatchResultDetail,
			routeTargetActionCreate:MEMatchResultUpdate,
			routeTargetActionUpdate:MEMatchResultUpdate,
			routeTargetActionList:MEMatchResult,
			routeTargetActionDelete:MEMatchResultDeleteDialog,
			leaf: true
        }
    ]

    return MEMenuItems;
}

const AppModuleME = (props: IAppLayoutProps) => {
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
        <div className="AppModuleME">
            <h2>AppModuleME</h2>
        </div>
    );

}
export default AppModuleME;