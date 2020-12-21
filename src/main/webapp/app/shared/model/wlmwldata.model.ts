import { Moment } from 'moment';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';

export interface IWlmwldata {
  id?: number;
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
  wltype?: IWlmwltype;
}

export const defaultValue: Readonly<IWlmwldata> = {};
