import React, {useEffect,useState} from 'react';
import {AppLayoutContext} from './AppLayout';
import { RouteComponentProps, Route, Link, useHistory, useRouteMatch, useLocation  } from 'react-router-dom';
import {IALDataSelectorProps} from './AppTypes';
import { Form, Button, Input } from 'reactstrap';
import prevIco from '../../../shared/resource/icons/MS.Arrow.Left.png';
import nextIco from '../../../shared/resource/icons/MS.Arrow.Right.png';
import firstIco from '../../../shared/resource/icons/MS.Arrow.First.png';
import lastIco from '../../../shared/resource/icons/MS.Arrow.Last.png';

import {filterHTMLTable, filterSelectorCompForJhipster, bindHTMLTableRowSelector} from "./TableUtils";

// Define data selector component, as a modal window
export const AppDataSelector = (props) =>{
  // define component workflow
  const [SelCompLoaded,setSelCompLoaded] = useState(false);
  // get current routing context params
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  // get AppLayoutContext params
  const {DSelectorOpen,DSelectorTitle,setDSelectorOpen,DSelectorEntityName,DSelectorFieldNames,DSelectorFieldData,DSelectorDisplayFields,DSelectorListComp,setSelectionAtOrigin,refreshDSelectorListComp}=React.useContext(AppLayoutContext);

  // set current selected row values at the origin window which opened this DSelector component
  const setSelectionAtOriginFunc = ()=> {
    const selectedRow = document.getElementById("SelectedRow");
    const colVals = selectedRow.innerHTML.split(",");
    if(selectedRow && setSelectionAtOrigin) {
      setSelectionAtOrigin(colVals);
      setDSelectorOpen(false)
    }
    else {
      // alert("Closing without no data selection..");
      setDSelectorOpen(false)
    }
  }

  // refresh selection list component
  const refreshSelList = ()=>{
    // set selection parameters
    // set route to refresh list
    history.push("/modules/appdataselector");
  }

  // bind events
  const bindEvents = () => {
    if(DSelectorOpen&&SelCompLoaded) {
      // focus trapping to window with onblur (looseFocus) event
      // window.addEventListener("focusout",(e)=>{e.preventDefault();})
      // window.addEventListener("blur",(e)=>{e.preventDefault();})

      // const selectorComp = window.parent

      // bind filtering events
      const filterBtn = document.getElementById("FilterButton");
      if(filterBtn) {
       filterBtn.addEventListener("click",()=>{filterHTMLTable("InputSearch","ListTable")})
      }
      const searchEdit = document.getElementById("InputSearch") as HTMLInputElement;
      if(searchEdit) {
        searchEdit.addEventListener("input",()=>{filterHTMLTable("InputSearch","ListTable")})
        // set user edited value from origin form
        if(DSelectorFieldData&&DSelectorFieldData[1])
          searchEdit.value = DSelectorFieldData[1];
      }
      const closeButton = document.getElementById("CloseButton");
      if(closeButton) {
        closeButton.addEventListener("click",()=>{setDSelectorOpen(false);})
      }
      // bind document closing events
      document.addEventListener("dblclick",()=>{
        setSelectionAtOriginFunc()
      })
      document.addEventListener("keypress",(event)=>{
        if(event.keyCode === 13)
          setSelectionAtOriginFunc()
      })
      // bind row selector event
      bindHTMLTableRowSelector("SelectedRow","ListTable",DSelectorFieldNames)
  }
 }

 // main state management effect
  useEffect(()=>{
      if(DSelectorOpen) {
         // route to  selector component
         if(!SelCompLoaded) {
           setSelCompLoaded(true);
           // history.push("/AppDataSelector");
           refreshSelList();
         }
         else {
           // after selection list data loaded,
           // filter components on it
           filterSelectorCompForJhipster(DSelectorFieldNames)
           // make it visible
           document.getElementById("DS-SelectionListComp").style.visibility="";
           // bind events to it
           bindEvents();
         }
       }
      else {
         if(SelCompLoaded) {
            setSelCompLoaded(false);
            history.goBack(); 
          }
       }
    }
  )

  // render when modal selector form open
  const DSelectorModalWindowStyle = {position:'fixed', zIndex:1, left:"15%", right:"15%", top:"10%", bottom:"5%",
    background:"white", color: "lightblue", borderStyle:'outset', borderWidth:'5px',
    fontSize:'12pt', display:'flex', flexDirection:"column", justifyContent:"space-between",
    overflow:"auto",padding:"3px", tabIndex:"-1", backdrop: 'static', dataKeyboard: "false"
  }

  const DSelectorModalHeaderStyle = {display:'inline-block', padding:"10px", backgroundColor:"lightgray"}

  if(DSelectorOpen&&SelCompLoaded)
    return(
      <Form responsive className="AppDataSelector" id="AppDataSelector" style={DSelectorModalWindowStyle}>
        <div className="AppDataSelectorHeader" style={DSelectorModalHeaderStyle}>
          <h4 style={{color:"black"}}>{DSelectorTitle}</h4>
          <Input  type="text" id="InputSearch" width="50%"/>
          <h5 id="SelectedRow" style={{color:"black"}}>selected</h5>
          <p/>
          <button id="FirstPage" onClick={()=>{}}>
            <img src={firstIco} height="30vh" alt="First"/>
          </button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button id="PrevPage" onClick={()=>{}}>
            <img src={prevIco} height="30vh" alt="Prev"/>
          </button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button id="NextPage" onClick={()=>{}}>
            <img src={nextIco} height="30vh" alt="Next"/>
          </button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button id="LastPage" onClick={()=>{}}>
            <img src={lastIco} height="30vh" alt="Last"/>
          </button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Button id="RefreshButton" onClick={()=>{refreshSelList();}}>Refresh</Button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button id="SelectButton" onClick={()=>{setSelectionAtOriginFunc();}}>Select</Button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button id="CloseButton" onClick={()=>{}} paddingright="5px">Close</Button>
        </div>
        <div style={{overflow:"auto",height:"100%",backgroundColor:"white", visibility:"hidden"}} id="DS-SelectionListComp">
          <Route path="/modules/appdataselector" exact={true} component={DSelectorListComp} />
        </div>
      </Form>)
  else {
    return(
      <script/>
        );
  }
}

/*   <DSelectorListComp {...props} match={match} history={history}/>  */


export const DSelectorTitleInitial = "Data Selector Modal Window Title-Uninitialized";
