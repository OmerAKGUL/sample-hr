import { Moment } from 'moment';

export interface IAfworkflow {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  apprefmngfrm?: string;
  apprefmngdomain?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
}

export const defaultValue: Readonly<IAfworkflow> = {};
