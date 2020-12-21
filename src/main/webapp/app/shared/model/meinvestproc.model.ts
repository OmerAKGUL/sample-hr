import { Moment } from 'moment';
import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { IMeinvestprofile } from 'app/shared/model/meinvestprofile.model';

export interface IMeinvestproc {
  id?: number;
  descr?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: IAfwprocess;
  invprofile?: IMeinvestprofile;
}

export const defaultValue: Readonly<IMeinvestproc> = {};
