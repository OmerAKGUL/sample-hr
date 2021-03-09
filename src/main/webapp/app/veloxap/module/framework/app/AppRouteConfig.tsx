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
import axios from 'axios';
import { getSession } from 'app/shared/reducers/authentication';

const apiUrl = 'http://localhost:9000/api/vuserroleswebapis' ;
const apiUserInfo = "admin:admin"

let result = "";
export const getAllMenuList = async () => {
  result = "";
  return await axios({
      method: 'get',
      url: apiUrl,
      headers: {"Authorization": "Basic " + btoa(apiUserInfo)}
      })
      .then(function (response) {
          // handle success
          for (let index = 0; index < response.data.length; index++) {
            if( "3"=== response.data[index]['id'].toString())
            { 
              console.warn("aaaa");
              result = result + " - " + response.data[index]['moduleName'].toString();
            }
            
          }
          
      })
      .catch(function (response) {
          // handle error
          console.warn(response);
      });
      
      return result;
  }
export const AppMenuItems: Array<IAppRoute> = [
  {
    path: '/modules/iwl',
    exact: false,
    title: "İzleme Listesi Entegrasyon",
    routeTarget: AppModuleIWL,
    hide : result.includes("İzleme Listesi Entegrasyon") ? false : true
  },
  {
    path: '/modules/itx',
    exact: false,
    title: "İşlem Entegrasyon",
    routeTarget: AppModuleITX,
    hide : result.includes("İşlem Entegrasyon") ? false : true
  },
  {
    path: '/modules/wlm',
    exact: false,
    title: "İzleme Listesi Yönetim",
    routeTarget: AppModuleWLM,
    hide : result.includes("İzleme Listesi Yönetim") ? false : true
  },
  {
    path: '/modules/me',
    exact: false,
    title: "Liste Karşılaştırma Motoru",
    routeTarget: AppModuleME,
    hide : result.includes("Liste Karşılaştırma Motoru") ? false : true
  },
  {
    path: '/modules/report',
    exact: false,
    title: "Raporlama Modülü",
    routeTarget: AppModuleReport,
    hide : result.includes("Raporlama Modülü") ? false : true
  },
  {
    path: '/modules/afs',
    exact: false,
    title: "Yetkilendirme",
    routeTarget: AppModuleAFS,
    hide : result.includes("Yetkilendirme") ? false : true
  },
  {
    path: '/modules/af',
    exact: false,
    title: "Uygulama Altyapı Tanım",
    routeTarget: AppModuleAF,
    hide : result.includes("Uygulama Altyapı Tanım") ? false : true
  }
]
// initial selected route
export const SelectedMainRoutingLinks = ["/"];
export const SelectedSideRoutingLinks = ["/"];
export const MainRoutingHistory: Array<Array<IAppRoute>> = [AppMenuItems];
export const SideRoutingHistory: Array<Array<IAppRoute>> = [];

export const CurrentSelectedPath = "/";
