import { Moment } from 'moment';
import { IMeconfig } from 'app/shared/model/meconfig.model';
import { IMeinvestproc } from 'app/shared/model/meinvestproc.model';

export interface IMematchresult {
  id?: number;
  matchid?: number;
  matchctxid?: number;
  matchwltype?: string;
  matchtxnid?: number;
  matchscore?: number;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  matchconfigcode?: IMeconfig;
  invprocid?: IMeinvestproc;
}

export const defaultValue: Readonly<IMematchresult> = {};
