import { IAfparamval } from 'app/shared/model/afparamval.model';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';

export interface IMemethodparam {
  id?: number;
  memid?: number;
  wlmid?: number;
  paramvalcode?: IAfparamval;
  paramidxno?: IAfparamval;
  matchmethodcode?: IMematchmethod;
  wltype?: IWlmwltype;
}

export const defaultValue: Readonly<IMemethodparam> = {};
