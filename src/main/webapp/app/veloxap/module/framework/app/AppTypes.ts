import { RouteComponentProps } from 'react-router-dom';
import { IAppRoute } from './IAppRoute';

// define application wide layout modules
// app profile module props
export interface IALProfileProps {
  apptitle: string;
  appversion: string;
  appsubtitle: string;
  appclient: string;
}

// app layout styping props
export interface IALStyleProps {
  applogo: any;
  clientlogo: any;
  mainGridLayoutWidthPercentages?: [];
  setMainGridLayoutWidthPercentages?: (widthP: []) => void;
  mainGridLayoutHeightPercentages?: [];
  setMainGridLayoutHeightPercentages?: (heightP: []) => void;
  backgroundColor?: any;
  setBackgroundColor?: (bckColor: any) => void;
}

// app navigation module props
export interface IALNavProps {
  currentMainRouting?: Array<IAppRoute>;
  currentSideRouting?: Array<IAppRoute>;
  mainRoutingHistory?: [Array<IAppRoute>];
  sideRoutingHistory?: [Array<IAppRoute>];

  selectedMainRoutingLinks?: string[];
  selectedSideRoutingLinks?: string[];

  currentMainTargetName?: string;
  currentSideTargetName?: string;

  currentSelectedPath?: string;

  setMainRouting?: (mainRoutes: Array<IAppRoute>) => void;
  setSideRouting?: (sideRoutes: Array<IAppRoute>) => void;

  handleAppMenuStatusBarclick?: (props: IAppLayoutProps) => void;
  handleMainRoutingBack?: (props: IAppLayoutProps) => void;
  handleSideRoutingBack?: (props: IAppLayoutProps) => void;
  resetCurrentRoute?: () => void;
  sideRoutingBack?: () => void;
}

// app messager module  props
export enum AppMsgType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}
export interface IALMsgBarProps {
  appMsg?: string;
  appMsgType?: AppMsgType;
  getMsgBarProps?: () => IALMsgBarProps;
  setMsgBarMsg?: (msgTxt: string, msgType: AppMsgType) => void;
}

// application workflow module props
export enum AppLayoutState {
  INITIALIZING = 'initializing',
  INITIALIZED = 'initialized',
  MAINNAVLINKING = 'mainnavlinking',
  ROUTETARGETSET = 'routetargetset',
  BACKMAINNAVLINKING = 'backmainnavlinking',
}
export interface IALFrmWorkflowProps {
  ALState?: AppLayoutState;
  changeALState?: (nextstate: AppLayoutState) => void;
  getALState?: () => AppLayoutState;
}

// domain workflow controller module props
export interface IALDomainWFProps {
  currDomWFID?: string;
  currDomStateID?: string;
  currDomStateName?: string;
  changeDomState?: (actID: string, actParams: []) => string;
}

// app data selection framework module  props
export interface IALDataSelectorProps {
  DSelectorOpen?: boolean;
  setDSelectorOpen?: (o: boolean) => void;
  DSelectorTitle?: string;
  DSelectorEntityName?: string;
  DSelectorFieldNames?: string[];
  DSelectorFieldData?: string[];
  DSelectorDisplayFields?: string[];
  DSelectorFilterAttrs?: string[];
  DSelectorFilterAttrVals?: string[];
  setDSelectorFilter?: (attrs: string[], attrvals: string[]) => void;
  DSelectorListComp?: React.FunctionComponent<RouteComponentProps>;
  refreshDSelectorListComp?: (attrs?: string[], attrVals?: string[]) => void;
  setSelectionAtOrigin?: (selectedVals: string[]) => void;
  setSelectorCtx?: (
    title: string,
    entityN: string,
    fieldsSelected: string[],
    fieldSelectedData: string[],
    displayedfields: string[],
    selComp: React.FunctionComponent<RouteComponentProps>,
    setSelectionFunc: (fieldVals: string[]) => void,
    refreshDSelectorListComp: (attrs: string[], attrVals: string[]) => void
  ) => void;
  getSelectorCtx?: () => IALDataSelectorProps;
}

// app security module props
export interface IALSecurityProps {
  userRole?: string;
}

// app workflow framework module  props
export interface IALPersistWFProps {
  listEntities?: () => void;
  editEntity?: () => void;
  createEntity?: () => void;
  updateEntity?: () => void;
  deleteEntity?: () => void;
}

// aggragated app layout props
export interface IAppLayoutProps
  extends RouteComponentProps,
    IALProfileProps,
    IALStyleProps,
    IALNavProps,
    IALNavProps,
    IALDataSelectorProps,
    IALSecurityProps,
    IALFrmWorkflowProps,
    IALDomainWFProps,
    IALPersistWFProps,
    IALMsgBarProps {
  children?: React.ReactNode;
}

// aggragated app layout props witout routing functionality
export interface IAppLayoutPropsNoRoute
  extends IALProfileProps,
    IALStyleProps,
    IALNavProps,
    IALNavProps,
    IALDataSelectorProps,
    IALSecurityProps,
    IALFrmWorkflowProps,
    IALDomainWFProps,
    IALPersistWFProps,
    IALMsgBarProps {
  children?: React.ReactNode;
}

export interface IAppProps extends IALProfileProps, IALStyleProps {}
