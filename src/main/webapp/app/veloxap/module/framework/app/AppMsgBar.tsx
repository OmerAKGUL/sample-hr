import React from 'react';
import {IALMsgBarProps} from './AppTypes';
import { AppMsgType } from './AppTypes';
import {AppLayoutContext} from './AppLayout';

// display format of now
const getNow = ()=>{
  const tNow = new Date();
  const dd = tNow.getDay();
  const mm = tNow.getMonth();
  const yy = tNow.getFullYear();
  const hh = tNow.getHours();
  const min = tNow.getMinutes();
  const sec = tNow.getSeconds();
  const ms = tNow.getMilliseconds();
  return yy + "/" + mm + "/" + "/" + dd + " " + hh +":" + min + ":" + sec + "." + ms;
}

// Define footer component for application: handle app messages and app status state
export const AppMsgBar = (props) => {
  // get app context
  const {getMsgBarProps,getALState} = React.useContext(AppLayoutContext);

  // check context available
  if(!getMsgBarProps)
      return (
        <div className="AppMsgBar">
            <h3>FooterMsgType:ERROR</h3>
            <h4>Msg:getMsgBarProps is null</h4>
        </div>);

  // render footer message bar
  const mbarprops = getMsgBarProps();
  let alState = "null";
  if(getALState)
    alState = getALState();

  return (
        <div className="AppMsgBar">
            <h3>FooterMsgType:{mbarprops.appMsgType} Status:{alState}</h3>
            <h4>[{getNow()}]:{mbarprops.appMsg}</h4>
        </div>);
}

export const InitialAppMsg : IALMsgBarProps = {
  appMsg:"Welcome to VeloxApp...",
  appMsgType:AppMsgType.INFO
}
