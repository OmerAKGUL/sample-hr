import { Moment } from 'moment';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { IMeconfig } from 'app/shared/model/meconfig.model';

export interface IMemtdconfig {
  id?: number;
  memid?: number;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  methodcode?: IMematchmethod;
  configcode?: IMeconfig;
}

export const defaultValue: Readonly<IMemtdconfig> = {};
