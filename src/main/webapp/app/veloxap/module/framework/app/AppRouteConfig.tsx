import { IAppRoute } from "./IAppRoute";
import React, { useEffect } from 'react';
// import app-modules
import AppModuleIWL from '../../domain/iwl/iwl'
import AppModuleITX from '../../domain/itx/itx'
import AppModuleWLM from '../../domain/wlm/wlm'
import AppModuleME from '../../domain/me/me'
import AppModuleReport from '../../domain/report/report'
import AppModuleAFS from '../../domain/afs/afs'
import AppModuleAF from '../../domain/af/af'



export const AppMenuItems: Array<IAppRoute> = [
  {
    path: '/modules/iwl',
    exact: false,
    title: "İzleme Listesi Entegrasyon",
    routeTarget: AppModuleIWL,
    hide : false
  },
  {
    path: '/modules/itx',
    exact: false,
    title: "İşlem Entegrasyon",
    routeTarget: AppModuleITX,
    hide : false
  },
  {
    path: '/modules/wlm',
    exact: false,
    title: "İzleme Listesi Yönetim",
    routeTarget: AppModuleWLM,
    hide : false
  },
  {
    path: '/modules/me',
    exact: false,
    title: "Liste Karşılaştırma Motoru",
    routeTarget: AppModuleME,
    hide : false 
  },
  {
    path: '/modules/report',
    exact: false,
    title: "Raporlama Modülü",
    routeTarget: AppModuleReport,
    hide : false
  },
  {
    path: '/modules/afs',
    exact: false,
    title: "Yetkilendirme",
    routeTarget: AppModuleAFS,
    hide : false 
  },
  {
    path: '/modules/af',
    exact: false,
    title: "Uygulama Altyapı Tanım",
    routeTarget: AppModuleAF,
    hide : false
  }
]
// initial selected route
export const SelectedMainRoutingLinks = ["/"];
export const SelectedSideRoutingLinks = ["/"];
export const MainRoutingHistory: Array<Array<IAppRoute>> = [AppMenuItems];
export const SideRoutingHistory: Array<Array<IAppRoute>> = [];

export const CurrentSelectedPath = "/";
