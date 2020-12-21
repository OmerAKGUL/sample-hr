import { Moment } from 'moment';

export interface IWlmwltype {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  publishercat?: string;
  publisherorgid?: number;
  publishername?: string;
  publishformat?: string;
  filteringtype?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: string;
}

export const defaultValue: Readonly<IWlmwltype> = {};
