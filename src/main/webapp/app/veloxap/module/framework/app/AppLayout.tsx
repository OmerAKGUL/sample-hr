// library imports: node
import history from '../../../shared/api/browser/history';
// library imports: react
import React from 'react';
import {useState,useEffect} from 'react';
// library imports: react-router
import { useLocation, useRouteMatch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

// import layout components
import {AppBrandBar} from './AppBrandBar';
import {AppMenuStatusBar} from './AppMenuStatusBar';
import {AppSidebarLeft} from './AppSidebarLeft';
import {AppRouteTarget} from './AppRouteTarget';
import {AppSidebarRight} from './AppSidebarRight';
import {AppMsgBar} from './AppMsgBar';
import * as Types from './AppTypes';
import {IAppRoute} from './IAppRoute';
import {InitialAppMsg} from './AppMsgBar';
import {AppDataSelector,DSelectorTitleInitial} from './AppDataSelector';

// initial route config
import {AppMenuItems,SelectedMainRoutingLinks,CurrentSelectedPath,MainRoutingHistory} from './AppRouteConfig';

// app layout wapped into router
export const AppLayout=(props:Types.IAppProps)=>{
  const location = useLocation();
  const match = useRouteMatch();

  return(
      <AppLayoutContainer {...props}
        history = {history} location = {location} match = {match}
      />
  );
}

// context object for app layout AppLayoutContainer
export const AppLayoutContext = React.createContext<Types.IAppLayoutPropsNoRoute>(null);

// main applayout component implement
export const AppLayoutContainer=(props:Types.IAppLayoutProps)=>{

  // property destruction
  const{match, location} = props;
  // state binding from props
  const [currentMainRouting,setCurrentMainRouting]=useState(AppMenuItems);
  const [selectedMainRoutingLinks,setSelectedMainRoutingLinks]=useState(SelectedMainRoutingLinks);
  const [currentSelectedPath,setCurrentSelectedPath]=useState(CurrentSelectedPath);
  const [mainRoutingHistory,setMainRoutingHistory]=useState(MainRoutingHistory);
  // const [reloadCurrentRoute,setReloadCurrentRoute]=useState();
  // const [sideRoutingBack,setSideRoutingBack]=useState();

  const [msgBarProps,setMsgBarProps]=useState(InitialAppMsg);
  const setMsgBar = (msg:string,msgtype:Types.AppMsgType)=>{
    setMsgBarProps({appMsg:msg,appMsgType:msgtype})
  }
  // application layout state management utils
  const getMsgBarProps=()=>{
    return msgBarProps;
  }
  const [ALState,setALState]=useState(Types.AppLayoutState.INITIALIZED);
  const [ALStateTransition,setALStateTransition]=useState(["",""]);
  const setAppLayoutState=(nextS:Types.AppLayoutState)=> {
    setALStateTransition([ALState,nextS]);
    setALState(nextS);
  }
  const getAppLayoutState=()=> {
    return ALState;
  }
  // data selector props state management
  const [DSelectorOpen,setDSelectorOpen]=useState(false);
  const [DSelectorTitle,setDSelectorTitle]=useState(DSelectorTitleInitial);
  const [DSelectorEntityName,setDSelectorEntityName]=useState("");
  const [DSelectorFieldNames,setDSelectorFieldNames]=useState([]);
  const [DSelectorFieldData,setDSelectorFieldData]=useState([]);
  const [DSelectorDisplayFields,setDSelectorDisplayFields]=useState([]);
  // const selCompInitial : React.ReactNode = null;
  // const initComp : React.FC = null
  // const fc : React.FunctionComponent<RouteComponentProps> = null;
  const [DSelectorListComp,setDSelectorListComp]=useState(null);
  const [setSelectionAtOrigin,setsetSelectionAtOrigin]=useState();
  const setSelectorCtxImpl=(title:string,entityName:string,fieldsSelected:string[],fieldSelectedData:string[],
            displayedfields:string[],selComp:React.FunctionComponent<RouteComponentProps>,setSelectionAtOriginFunc)=>{
    setDSelectorTitle(title);
    setDSelectorEntityName(entityName);
    setDSelectorFieldNames(fieldsSelected);
    setDSelectorFieldData(fieldSelectedData);
    setDSelectorDisplayFields(displayedfields);
    setDSelectorListComp(selComp);
    setDSelectorOpen(true);
    setsetSelectionAtOrigin(setSelectionAtOriginFunc);
  }

  const getSelectorCtxImpl=()=>{
    return {DSelectorOpen,DSelectorTitle,DSelectorEntityName,
            DSelectorFieldNames,DSelectorFieldData,
            DSelectorDisplayFields,DSelectorListComp,
            setSelectionAtOrigin
          }
  }

  // EVENT HANDLERS
  // app menu click handler
  const handleAppMenuClick = (props1:Types.IAppLayoutProps)=>{
  }

  // app menu back handler
  const handleMainRoutingBack = (props2:Types.IAppLayoutProps)=>{
    if(!mainRoutingHistory) {
      setMsgBar("Empty mainRoutingHistory...",Types.AppMsgType.ERROR);
      return;
    }

    if(mainRoutingHistory.length<=1) {
      setMsgBar("You are at the root routing level...",Types.AppMsgType.INFO);
      return;
    }

    // set app-layout state properly
    setAppLayoutState(Types.AppLayoutState.BACKMAINNAVLINKING);
    try {
      // remove last routing from routingHistory immutably
      const hist = [...mainRoutingHistory];
      hist.pop();
      setMainRoutingHistory(hist);
      // remove last selected link
      const links = [...selectedMainRoutingLinks];
      links.pop();
      setSelectedMainRoutingLinks(links);
      // set current routing
      setCurrentMainRouting(hist[hist.length-1]);
    }
    finally {
      // reset to original layout state
      // setAppLayoutState(Types.AppLayoutState.INITIALIZED);
    }
  }

  // main routing update
  const setMainRouting = (mainRoutes:Array<IAppRoute>)=>{
    // set main routing only under app layout initialized state
    if(getAppLayoutState()!==Types.AppLayoutState.INITIALIZED )
      return;

    if(mainRoutingHistory)
      mainRoutingHistory.push(mainRoutes);

    // add selected links
    const links = [...selectedMainRoutingLinks];
    links.push(location.pathname);
    setSelectedMainRoutingLinks(links);
    setCurrentMainRouting(mainRoutes);
  }


  // post render side effects
  // let DSelectorParentNode = null;
  useEffect(()=>{});

  useEffect(()=>{
    // handle dselector modal window when parent is not created
    let DSelectorParentNode = document.getElementById('AppDataSelectorParent');
    // const appRootNode = document.getElementById("app-view-container");
    if(DSelectorParentNode===null) {
      DSelectorParentNode = document.getElementById("AppLayoutId");
      // DSelectorParentNode = document.createElement('div');
      // DSelectorParentNode.className = "AppDataSelector";
      DSelectorParentNode.id = "AppDataSelectorParent";
      // document.body.appendChild(DSelectorParentNode);
      // appRootNode.appendChild(DSelectorParentNode);
     }

     /*
     ReactDOM.render(<AppDataSelector
                      DSelectorOpen={DSelectorOpen} DSelectorTitle={DSelectorTitle}
                      setDSelectorOpen={setDSelectorOpen} DSelectorEntityName={DSelectorEntityName}
                      DSelectorFieldNames={DSelectorFieldNames} selectionFieldData={selectionFieldData}
                      selectiondisplayFields={selectiondisplayFields} DSelectorListComp ={DSelectorListComp}
                      setSelectedData = {setSelectedData}
       />,DSelectorParentNode);
       */
  })

  // render app layout
  return(
    <div className="AppLayout" id="AppLayoutId">
      <AppLayoutContext.Provider value={
          {
          apptitle:props.apptitle,appsubtitle:props.appsubtitle, appversion:props.appversion,
          appclient:props.appclient,applogo:props.applogo, clientlogo:props.clientlogo,
          setMainRouting, currentMainRouting,
          setMsgBarMsg:setMsgBar, getMsgBarProps,
          selectedMainRoutingLinks,handleMainRoutingBack,
          changeALState:setAppLayoutState,getALState:getAppLayoutState,
          DSelectorOpen,setDSelectorOpen,DSelectorTitle,DSelectorFieldNames,DSelectorFieldData,
          DSelectorDisplayFields,DSelectorListComp, setSelectionAtOrigin, setSelectorCtx:setSelectorCtxImpl,
          getSelectorCtx:getSelectorCtxImpl
          }
      }>
          <AppDataSelector/>
          <AppBrandBar {...props} />
          <AppMenuStatusBar {...props} />
          <AppSidebarLeft {...props} />
          <AppRouteTarget {...props} />
          <AppSidebarRight {...props} />
          {/* <AppMsgBar {...props} />*/}
      </AppLayoutContext.Provider>
    </div>
  );
}

// EVENT HANDLERS

// back menu from browser history
export const handleBackMenuFromBrowserHistory = (props:Types.IAppLayoutProps)=>{
  // history.back();
}
