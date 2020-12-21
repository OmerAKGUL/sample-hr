import React from 'react';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Region from './region';
import Country from './country';
import Location from './location';
import Department from './department';
import Task from './task';
import Employee from './employee';
import Job from './job';
import JobHistory from './job-history';
import App from '../veloxap/App';
import Wlmwltype from './wlmwltype';
import Wlmwldata from './wlmwldata';
import Afdatafilter from './afdatafilter';
import Afetljobtype from './afetljobtype';
import Afform from './afform';
import Afformdatafilter from './afformdatafilter';
import Afmenuchild from './afmenuchild';
import Afmenuitem from './afmenuitem';
import Afmsg from './afmsg';
import Afparamval from './afparamval';
import Afsauthentication from './afsauthentication';
import Afsauthorization from './afsauthorization';
import Afsrole from './afsrole';
import Afsroleuser from './afsroleuser';
import Afschedule from './afschedule';
import Afsysmodule from './afsysmodule';
import Afsystem from './afsystem';
import Afwfaction from './afwfaction';
import Afwfstate from './afwfstate';
import Afwprocaction from './afwprocaction';
import Afwprocess from './afwprocess';
import Afworkflow from './afworkflow';
import Itxaccounttype from './itxaccounttype';
import Itxaccounttinfo from './itxaccounttinfo';
import Itxcity from './itxcity';
import Itxcountry from './itxcountry';
import Itxcurrency from './itxcurrency';
import Itxcustaddress from './itxcustaddress';
import Itxcustadressinfo from './itxcustadressinfo';
import Itxcustinfo from './itxcustinfo';
import Itxcusttype from './itxcusttype';
import Itxdictionary from './itxdictionary';
import Itxorgbranch from './itxorgbranch';
import Itxorganization from './itxorganization';
import Itxtxnqueue from './itxtxnqueue';
import Itxtxntype from './itxtxntype';
import Iwlimportqueue from './iwlimportqueue';
import Meconfig from './meconfig';
import Meinvestproc from './meinvestproc';
import Meinvestprofile from './meinvestprofile';
import Mematchmethod from './mematchmethod';
import Mematchresult from './mematchresult';
import Mematchresultctx from './mematchresultctx';
import Memethodparam from './memethodparam';
import Memtdconfig from './memtdconfig';
import Memtdwlcriteria from './memtdwlcriteria';
import Wlmwldatalog from './wlmwldatalog';
import Jhiuser from './jhiuser';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      // <ErrorBoundaryRoute path={`${match.url}modules`} component={App} />
      <ErrorBoundaryRoute path={`${match.url}region`} component={Region} />
      <ErrorBoundaryRoute path={`${match.url}country`} component={Country} />
      <ErrorBoundaryRoute path={`${match.url}location`} component={Location} />
      <ErrorBoundaryRoute path={`${match.url}department`} component={Department} />
      <ErrorBoundaryRoute path={`${match.url}task`} component={Task} />
      <ErrorBoundaryRoute path={`${match.url}employee`} component={Employee} />
      <ErrorBoundaryRoute path={`${match.url}job`} component={Job} />
      <ErrorBoundaryRoute path={`${match.url}job-history`} component={JobHistory} />
      <ErrorBoundaryRoute path={`${match.url}wlmwltype`} component={Wlmwltype} />
      <ErrorBoundaryRoute path={`${match.url}wlmwldata`} component={Wlmwldata} />
      <ErrorBoundaryRoute path={`${match.url}afdatafilter`} component={Afdatafilter} />
      <ErrorBoundaryRoute path={`${match.url}afetljobtype`} component={Afetljobtype} />
      <ErrorBoundaryRoute path={`${match.url}afform`} component={Afform} />
      <ErrorBoundaryRoute path={`${match.url}afformdatafilter`} component={Afformdatafilter} />
      <ErrorBoundaryRoute path={`${match.url}afmenuchild`} component={Afmenuchild} />
      <ErrorBoundaryRoute path={`${match.url}afmenuitem`} component={Afmenuitem} />
      <ErrorBoundaryRoute path={`${match.url}afmsg`} component={Afmsg} />
      <ErrorBoundaryRoute path={`${match.url}afparamval`} component={Afparamval} />
      <ErrorBoundaryRoute path={`${match.url}afsauthentication`} component={Afsauthentication} />
      <ErrorBoundaryRoute path={`${match.url}afsauthorization`} component={Afsauthorization} />
      <ErrorBoundaryRoute path={`${match.url}afsrole`} component={Afsrole} />
      <ErrorBoundaryRoute path={`${match.url}afsroleuser`} component={Afsroleuser} />
      <ErrorBoundaryRoute path={`${match.url}afschedule`} component={Afschedule} />
      <ErrorBoundaryRoute path={`${match.url}afsysmodule`} component={Afsysmodule} />
      <ErrorBoundaryRoute path={`${match.url}afsystem`} component={Afsystem} />
      <ErrorBoundaryRoute path={`${match.url}afwfaction`} component={Afwfaction} />
      <ErrorBoundaryRoute path={`${match.url}afwfstate`} component={Afwfstate} />
      <ErrorBoundaryRoute path={`${match.url}afwprocaction`} component={Afwprocaction} />
      <ErrorBoundaryRoute path={`${match.url}afwprocess`} component={Afwprocess} />
      <ErrorBoundaryRoute path={`${match.url}afworkflow`} component={Afworkflow} />
      <ErrorBoundaryRoute path={`${match.url}itxaccounttype`} component={Itxaccounttype} />
      <ErrorBoundaryRoute path={`${match.url}itxaccounttinfo`} component={Itxaccounttinfo} />
      <ErrorBoundaryRoute path={`${match.url}itxcity`} component={Itxcity} />
      <ErrorBoundaryRoute path={`${match.url}itxcountry`} component={Itxcountry} />
      <ErrorBoundaryRoute path={`${match.url}itxcurrency`} component={Itxcurrency} />
      <ErrorBoundaryRoute path={`${match.url}itxcustaddress`} component={Itxcustaddress} />
      <ErrorBoundaryRoute path={`${match.url}itxcustadressinfo`} component={Itxcustadressinfo} />
      <ErrorBoundaryRoute path={`${match.url}itxcustinfo`} component={Itxcustinfo} />
      <ErrorBoundaryRoute path={`${match.url}itxcusttype`} component={Itxcusttype} />
      <ErrorBoundaryRoute path={`${match.url}itxdictionary`} component={Itxdictionary} />
      <ErrorBoundaryRoute path={`${match.url}itxorgbranch`} component={Itxorgbranch} />
      <ErrorBoundaryRoute path={`${match.url}itxorganization`} component={Itxorganization} />
      <ErrorBoundaryRoute path={`${match.url}itxtxnqueue`} component={Itxtxnqueue} />
      <ErrorBoundaryRoute path={`${match.url}itxtxntype`} component={Itxtxntype} />
      <ErrorBoundaryRoute path={`${match.url}iwlimportqueue`} component={Iwlimportqueue} />
      <ErrorBoundaryRoute path={`${match.url}meconfig`} component={Meconfig} />
      <ErrorBoundaryRoute path={`${match.url}meinvestproc`} component={Meinvestproc} />
      <ErrorBoundaryRoute path={`${match.url}meinvestprofile`} component={Meinvestprofile} />
      <ErrorBoundaryRoute path={`${match.url}mematchmethod`} component={Mematchmethod} />
      <ErrorBoundaryRoute path={`${match.url}mematchresult`} component={Mematchresult} />
      <ErrorBoundaryRoute path={`${match.url}mematchresultctx`} component={Mematchresultctx} />
      <ErrorBoundaryRoute path={`${match.url}memethodparam`} component={Memethodparam} />
      <ErrorBoundaryRoute path={`${match.url}memtdconfig`} component={Memtdconfig} />
      <ErrorBoundaryRoute path={`${match.url}memtdwlcriteria`} component={Memtdwlcriteria} />
      <ErrorBoundaryRoute path={`${match.url}wlmwldatalog`} component={Wlmwldatalog} />
      <ErrorBoundaryRoute path={`${match.url}jhiuser`} component={Jhiuser} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
