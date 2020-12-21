import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';

export interface IMemtdwlcriteria {
  id?: number;
  wlmid?: number;
  name?: string;
  applyonwlfields?: string;
  wltypecode?: IWlmwltype;
  matchmethodcode?: IMematchmethod;
}

export const defaultValue: Readonly<IMemtdwlcriteria> = {};
