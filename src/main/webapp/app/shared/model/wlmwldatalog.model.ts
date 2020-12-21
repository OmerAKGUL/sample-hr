import { Moment } from 'moment';
import { IWlmwldata } from 'app/shared/model/wlmwldata.model';

export interface IWlmwldatalog {
  id?: number;
  dtchanged?: string;
  changeusr?: number;
  wltype?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  namedata?: string;
  addressdata?: string;
  citydata?: string;
  countrydata?: string;
  birthdatedata?: string;
  tinnumberdata?: string;
  wlwldataid?: IWlmwldata;
}

export const defaultValue: Readonly<IWlmwldatalog> = {};
