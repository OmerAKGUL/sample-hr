import { Moment } from 'moment';

export interface IJhiuser {
  id?: number;
  loginname?: string;
  passwordhash?: string;
  firstname?: string;
  lastname?: string;
  imageurl?: string;
  langkey?: string;
  activationkey?: string;
  resetkey?: string;
  createdby?: string;
  createddate?: string;
  resetdate?: string;
  lastmodifiedby?: string;
  lastmodifieddate?: string;
}

export const defaultValue: Readonly<IJhiuser> = {};
