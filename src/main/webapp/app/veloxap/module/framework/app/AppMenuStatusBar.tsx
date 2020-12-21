// Import libraries: React
import React, {useEffect} from "react";
import { Image } from 'reactstrap';
import {AppLayoutContext} from './AppLayout';
import navbackimg from '../../../shared/resource/icons/MS.Arrow.Left.png';
import closeNavIco from '../../../shared/resource/icons/MS.Oper.Multiply.png';

// menu status bar component for application: manage current menu selection state and options..
export const AppMenuStatusBar = (props) => {

  // get app context
  const {selectedMainRoutingLinks,handleMainRoutingBack} = React.useContext(AppLayoutContext);

  // render selected routing links history on status bar
  if(!selectedMainRoutingLinks)
    return (<div className="AppMenuStatusBar">
              <p>selectedRoutingLinks is null. Developers: please define initial menu from AppConfigMenu..</p>
           </div>);

  // const navMenuHist = selectedMainRoutingLinks.map( (item,index)=>{return ">>"+index+":"+item});
  return (
      <div className="AppMenuStatusBar">
        <img src={closeNavIco} height="40vh" alt="<<"/>
        <img src={navbackimg} height="40vh" alt="<<" onClick={ ()=>{
              if(handleMainRoutingBack) {
                handleMainRoutingBack(props);
              }
            }
          }/>
        <div className="navMenuHistory">{ selectedMainRoutingLinks.map((item,idx)=>{
            return (<span className="navMenuHistoryButton" key={idx}><span>&nbsp;&nbsp;</span>{item}</span>);
        })}
        </div>
      </div>
    );
};
