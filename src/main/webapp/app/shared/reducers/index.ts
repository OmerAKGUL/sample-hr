import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import region, {
  RegionState
} from 'app/entities/region/region.reducer';
// prettier-ignore
import country, {
  CountryState
} from 'app/entities/country/country.reducer';
// prettier-ignore
import location, {
  LocationState
} from 'app/entities/location/location.reducer';
// prettier-ignore
import department, {
  DepartmentState
} from 'app/entities/department/department.reducer';
// prettier-ignore
import task, {
  TaskState
} from 'app/entities/task/task.reducer';
// prettier-ignore
import employee, {
  EmployeeState
} from 'app/entities/employee/employee.reducer';
// prettier-ignore
import job, {
  JobState
} from 'app/entities/job/job.reducer';
// prettier-ignore
import jobHistory, {
  JobHistoryState
} from 'app/entities/job-history/job-history.reducer';
// prettier-ignore
import wlmwltype, {
  WlmwltypeState
} from 'app/entities/wlmwltype/wlmwltype.reducer';
// prettier-ignore
import wlmwldata, {
  WlmwldataState
} from 'app/entities/wlmwldata/wlmwldata.reducer';
// prettier-ignore
import afdatafilter, {
  AfdatafilterState
} from 'app/entities/afdatafilter/afdatafilter.reducer';
// prettier-ignore
import afetljobtype, {
  AfetljobtypeState
} from 'app/entities/afetljobtype/afetljobtype.reducer';
// prettier-ignore
import afform, {
  AfformState
} from 'app/entities/afform/afform.reducer';
// prettier-ignore
import afformdatafilter, {
  AfformdatafilterState
} from 'app/entities/afformdatafilter/afformdatafilter.reducer';
// prettier-ignore
import afmenuchild, {
  AfmenuchildState
} from 'app/entities/afmenuchild/afmenuchild.reducer';
// prettier-ignore
import afmenuitem, {
  AfmenuitemState
} from 'app/entities/afmenuitem/afmenuitem.reducer';
// prettier-ignore
import afmsg, {
  AfmsgState
} from 'app/entities/afmsg/afmsg.reducer';
// prettier-ignore
import afparamval, {
  AfparamvalState
} from 'app/entities/afparamval/afparamval.reducer';
// prettier-ignore
import afsauthentication, {
  AfsauthenticationState
} from 'app/entities/afsauthentication/afsauthentication.reducer';
// prettier-ignore
import afsauthorization, {
  AfsauthorizationState
} from 'app/entities/afsauthorization/afsauthorization.reducer';
// prettier-ignore
import afsrole, {
  AfsroleState
} from 'app/entities/afsrole/afsrole.reducer';
// prettier-ignore
import afsroleuser, {
  AfsroleuserState
} from 'app/entities/afsroleuser/afsroleuser.reducer';
// prettier-ignore
import afschedule, {
  AfscheduleState
} from 'app/entities/afschedule/afschedule.reducer';
// prettier-ignore
import afsysmodule, {
  AfsysmoduleState
} from 'app/entities/afsysmodule/afsysmodule.reducer';
// prettier-ignore
import afsystem, {
  AfsystemState
} from 'app/entities/afsystem/afsystem.reducer';
// prettier-ignore
import afwfaction, {
  AfwfactionState
} from 'app/entities/afwfaction/afwfaction.reducer';
// prettier-ignore
import afwfstate, {
  AfwfstateState
} from 'app/entities/afwfstate/afwfstate.reducer';
// prettier-ignore
import afwprocaction, {
  AfwprocactionState
} from 'app/entities/afwprocaction/afwprocaction.reducer';
// prettier-ignore
import afwprocess, {
  AfwprocessState
} from 'app/entities/afwprocess/afwprocess.reducer';
// prettier-ignore
import afworkflow, {
  AfworkflowState
} from 'app/entities/afworkflow/afworkflow.reducer';
// prettier-ignore
import itxaccounttype, {
  ItxaccounttypeState
} from 'app/entities/itxaccounttype/itxaccounttype.reducer';
// prettier-ignore
import itxaccounttinfo, {
  ItxaccounttinfoState
} from 'app/entities/itxaccounttinfo/itxaccounttinfo.reducer';
// prettier-ignore
import itxcity, {
  ItxcityState
} from 'app/entities/itxcity/itxcity.reducer';
// prettier-ignore
import itxcountry, {
  ItxcountryState
} from 'app/entities/itxcountry/itxcountry.reducer';
// prettier-ignore
import itxcurrency, {
  ItxcurrencyState
} from 'app/entities/itxcurrency/itxcurrency.reducer';
// prettier-ignore
import itxcustaddress, {
  ItxcustaddressState
} from 'app/entities/itxcustaddress/itxcustaddress.reducer';
// prettier-ignore
import itxcustadressinfo, {
  ItxcustadressinfoState
} from 'app/entities/itxcustadressinfo/itxcustadressinfo.reducer';
// prettier-ignore
import itxcustinfo, {
  ItxcustinfoState
} from 'app/entities/itxcustinfo/itxcustinfo.reducer';
// prettier-ignore
import itxcusttype, {
  ItxcusttypeState
} from 'app/entities/itxcusttype/itxcusttype.reducer';
// prettier-ignore
import itxdictionary, {
  ItxdictionaryState
} from 'app/entities/itxdictionary/itxdictionary.reducer';
// prettier-ignore
import itxorgbranch, {
  ItxorgbranchState
} from 'app/entities/itxorgbranch/itxorgbranch.reducer';
// prettier-ignore
import itxorganization, {
  ItxorganizationState
} from 'app/entities/itxorganization/itxorganization.reducer';
// prettier-ignore
import itxtxnqueue, {
  ItxtxnqueueState
} from 'app/entities/itxtxnqueue/itxtxnqueue.reducer';
// prettier-ignore
import itxtxntype, {
  ItxtxntypeState
} from 'app/entities/itxtxntype/itxtxntype.reducer';
// prettier-ignore
import iwlimportqueue, {
  IwlimportqueueState
} from 'app/entities/iwlimportqueue/iwlimportqueue.reducer';
// prettier-ignore
import meconfig, {
  MeconfigState
} from 'app/entities/meconfig/meconfig.reducer';
// prettier-ignore
import meinvestproc, {
  MeinvestprocState
} from 'app/entities/meinvestproc/meinvestproc.reducer';
// prettier-ignore
import meinvestprofile, {
  MeinvestprofileState
} from 'app/entities/meinvestprofile/meinvestprofile.reducer';
// prettier-ignore
import mematchmethod, {
  MematchmethodState
} from 'app/entities/mematchmethod/mematchmethod.reducer';
// prettier-ignore
import mematchresult, {
  MematchresultState
} from 'app/entities/mematchresult/mematchresult.reducer';
// prettier-ignore
import mematchresultctx, {
  MematchresultctxState
} from 'app/entities/mematchresultctx/mematchresultctx.reducer';
// prettier-ignore
import memethodparam, {
  MemethodparamState
} from 'app/entities/memethodparam/memethodparam.reducer';
// prettier-ignore
import memtdconfig, {
  MemtdconfigState
} from 'app/entities/memtdconfig/memtdconfig.reducer';
// prettier-ignore
import memtdwlcriteria, {
  MemtdwlcriteriaState
} from 'app/entities/memtdwlcriteria/memtdwlcriteria.reducer';
// prettier-ignore
import wlmwldatalog, {
  WlmwldatalogState
} from 'app/entities/wlmwldatalog/wlmwldatalog.reducer';
// prettier-ignore
import jhiuser, {
  JhiuserState
} from 'app/entities/jhiuser/jhiuser.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly region: RegionState;
  readonly country: CountryState;
  readonly location: LocationState;
  readonly department: DepartmentState;
  readonly task: TaskState;
  readonly employee: EmployeeState;
  readonly job: JobState;
  readonly jobHistory: JobHistoryState;
  readonly wlmwltype: WlmwltypeState;
  readonly wlmwldata: WlmwldataState;
  readonly afdatafilter: AfdatafilterState;
  readonly afetljobtype: AfetljobtypeState;
  readonly afform: AfformState;
  readonly afformdatafilter: AfformdatafilterState;
  readonly afmenuchild: AfmenuchildState;
  readonly afmenuitem: AfmenuitemState;
  readonly afmsg: AfmsgState;
  readonly afparamval: AfparamvalState;
  readonly afsauthentication: AfsauthenticationState;
  readonly afsauthorization: AfsauthorizationState;
  readonly afsrole: AfsroleState;
  readonly afsroleuser: AfsroleuserState;
  readonly afschedule: AfscheduleState;
  readonly afsysmodule: AfsysmoduleState;
  readonly afsystem: AfsystemState;
  readonly afwfaction: AfwfactionState;
  readonly afwfstate: AfwfstateState;
  readonly afwprocaction: AfwprocactionState;
  readonly afwprocess: AfwprocessState;
  readonly afworkflow: AfworkflowState;
  readonly itxaccounttype: ItxaccounttypeState;
  readonly itxaccounttinfo: ItxaccounttinfoState;
  readonly itxcity: ItxcityState;
  readonly itxcountry: ItxcountryState;
  readonly itxcurrency: ItxcurrencyState;
  readonly itxcustaddress: ItxcustaddressState;
  readonly itxcustadressinfo: ItxcustadressinfoState;
  readonly itxcustinfo: ItxcustinfoState;
  readonly itxcusttype: ItxcusttypeState;
  readonly itxdictionary: ItxdictionaryState;
  readonly itxorgbranch: ItxorgbranchState;
  readonly itxorganization: ItxorganizationState;
  readonly itxtxnqueue: ItxtxnqueueState;
  readonly itxtxntype: ItxtxntypeState;
  readonly iwlimportqueue: IwlimportqueueState;
  readonly meconfig: MeconfigState;
  readonly meinvestproc: MeinvestprocState;
  readonly meinvestprofile: MeinvestprofileState;
  readonly mematchmethod: MematchmethodState;
  readonly mematchresult: MematchresultState;
  readonly mematchresultctx: MematchresultctxState;
  readonly memethodparam: MemethodparamState;
  readonly memtdconfig: MemtdconfigState;
  readonly memtdwlcriteria: MemtdwlcriteriaState;
  readonly wlmwldatalog: WlmwldatalogState;
  readonly jhiuser: JhiuserState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  region,
  country,
  location,
  department,
  task,
  employee,
  job,
  jobHistory,
  wlmwltype,
  wlmwldata,
  afdatafilter,
  afetljobtype,
  afform,
  afformdatafilter,
  afmenuchild,
  afmenuitem,
  afmsg,
  afparamval,
  afsauthentication,
  afsauthorization,
  afsrole,
  afsroleuser,
  afschedule,
  afsysmodule,
  afsystem,
  afwfaction,
  afwfstate,
  afwprocaction,
  afwprocess,
  afworkflow,
  itxaccounttype,
  itxaccounttinfo,
  itxcity,
  itxcountry,
  itxcurrency,
  itxcustaddress,
  itxcustadressinfo,
  itxcustinfo,
  itxcusttype,
  itxdictionary,
  itxorgbranch,
  itxorganization,
  itxtxnqueue,
  itxtxntype,
  iwlimportqueue,
  meconfig,
  meinvestproc,
  meinvestprofile,
  mematchmethod,
  mematchresult,
  mematchresultctx,
  memethodparam,
  memtdconfig,
  memtdwlcriteria,
  wlmwldatalog,
  jhiuser,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
});

export default rootReducer;
