import { Moment } from 'moment';
import { IAfschedule } from 'app/shared/model/afschedule.model';

export interface IMeconfig {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  wlfieldlist?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  scheduleid?: IAfschedule;
}

export const defaultValue: Readonly<IMeconfig> = {};
