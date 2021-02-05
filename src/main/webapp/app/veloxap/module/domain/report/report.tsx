import React, { useEffect, useState, useRef } from 'react';
import { IAppLayoutProps, AppMsgType, AppLayoutState } from '../../framework/app/AppTypes';
import { IAppRoute } from '../../framework/app/IAppRoute';
import {AppLayoutContext} from '../../framework/app/AppLayout';




export const SuspiciousTransactionInvestigation = (props) => {

    return (
        <div className="SuspiciousTransactionInvestigation">
            <h2>Şüpheli İşlem İnceleme</h2>
        <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://vergidosyasi.com/2017/03/28/supheli-islem-tipleri/' height = 410 width=1050/>"}} />
        </div>
    );
}

export const WatchListInvestigation
    = (props) => {
        return (
            <div className="WatchListInvestigation">
                <h2>İzleme Listesi İnceleme</h2>
            </div>
        );
    }

export const TransactionListInvestigation = (props) => {

    return (
        <div className="TransactionListInvestigation">
            <h2>İşlem Listesi İnceleme</h2>
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