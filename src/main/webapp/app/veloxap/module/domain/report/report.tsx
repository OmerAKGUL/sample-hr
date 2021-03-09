import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';
import {AppLayoutContext} from '../../framework/app/AppLayout';
import axios from 'axios';
// 'C:/java_wlengine_repo/sample-HRSystem-2020_11_06/node_modules/react-iframe/iframe'
import Iframe from 'react-iframe';
const SupTransInvesRportUrl= "http://BO43:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AWEJIfZhRoZJqlo9qhWKQ.E&X-SAP-LogonToken=";
const WatchListInvesUrl= "http://BO43:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AeqLh44yZ5VDhuOnhcDxW_s&X-SAP-LogonToken=";
const TransListInvesUrl= "http://BO43:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AQhSs6XTuytNrfp6i1CWCQ4&X-SAP-LogonToken=";
let tokenKey;
function Counter() {

    const bodyFormData = new FormData();


    axios({
        method: 'get',
        url: 'http://BO43:9000/api/vuserroleswebapis',
        data:  {"username": "Administrator", "password": "Mds123", "auth": "secEnterprise"},
        headers: {"Content-Type": "application/json", "Accept": "application/json" }
        })
        .then(function (response) {
            // handle success
            tokenKey = encodeURIComponent(response.data["logontoken"]).toString();
        })
        .catch(function (response) {
            // handle error
            console.warn(response);
            tokenKey =  null;
        });
    }


export const SuspiciousTransactionInvestigation = (props) => {

    return (
        <div className="SuspiciousTransactionInvestigation">
            {Counter() }
            {console.warn(tokenKey)}
            <a rel="noopener noreferrer" href={SupTransInvesRportUrl+tokenKey} target="_blank">Şüpheli İşlem Raporunu Görüntülemek İçin Tıklayınız.</a>
            
        </div>
    );
}

export const WatchListInvestigation
    = (props) => {
        return (
            <div className="WatchListInvestigation">
                <a rel="noopener noreferrer" href={WatchListInvesUrl+tokenKey} target="_blank">İzleme Listesi Raporunu Görüntülemek İçin Tıklayınız.</a>
            </div>
        );
    }

export const TransactionListInvestigation = (props) => {

    return (
        <div className="TransactionListInvestigation">
            <a rel="noopener noreferrer" href={TransListInvesUrl+tokenKey} target="_blank">İşlem Listesi Raporu Görüntülemek İçin Tıklayınız.</a>
        </div>
    );
}

export const CustomerListInvestigation
    = (props) => {
        return (
            <div className="CustomerListInvestigation">
                <h2>Müşteri Listesi İnceleme</h2>
            </div>
        );
    }

export const MASAKList = (props) => {

    return (
        <div className="MASAKList">
            <h2>MASAK Listesi</h2>
        </div>
    );
}

// define application menu items for module
const getMenuItems = (matchUrl: string) => {
    const ReportMenuItems: Array<IAppRoute> = [
        
        {
            path: `${matchUrl}/report`,
            exact: false,
            title: "Şüpheli İşlem İnceleme",
            routeTarget: SuspiciousTransactionInvestigation
        },
        {
            path: `${matchUrl}/report3`,
            exact: false,
            title: "İzleme Listesi İnceleme",
            routeTarget: WatchListInvestigation
        },
        {
            path: `${matchUrl}/report4`,
            exact: false,
            title: "İşlem Listesi İnceleme",
            routeTarget: TransactionListInvestigation
        },
        {
            path: `${matchUrl}/report5`,
            exact: false,
            title: "Müşteri Listesi İnceleme",
            routeTarget: CustomerListInvestigation
        },
        {
            path: `${matchUrl}/report6`,
            exact: false,
            title: "MASAK Listesi",
            routeTarget: MASAKList
        }
    ]

    return ReportMenuItems;
}

const AppModuleReport = (props: IAppLayoutProps) => {
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
        <div className="AppModuleReport">
            <h2>AppModuleReport</h2>
 		</div>
    );

}
export default AppModuleReport;