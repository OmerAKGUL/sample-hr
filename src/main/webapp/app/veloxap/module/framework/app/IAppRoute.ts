import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IAppRoute {
  title: string;
  path: string;
  linkedpathCreate?: string;
  linkedpathEdit?: string;
  linkedpathUpdate?: string;
  linkedpathDelete?: string;
  linkedpathList?: string;
  routeTarget: React.FunctionComponent<RouteComponentProps>;
  routeTargetActionCreate?: React.FunctionComponent<RouteComponentProps>;
  routeTargetActionEdit?: React.FunctionComponent<RouteComponentProps>;
  routeTargetActionUpdate?: React.FunctionComponent<RouteComponentProps>;
  routeTargetActionDelete?: React.FunctionComponent<RouteComponentProps>;
  routeTargetActionList?: React.FunctionComponent<RouteComponentProps>;
  leaf?: boolean;
  exact?: boolean;
  hide?: boolean;
  containParam?: boolean;
  params?: Array<IRouteParam>;
}

export interface IRouteParam {
  id: string;
  value: string;
}
