import { IAfsrole } from 'app/shared/model/afsrole.model';
import { IAfform } from 'app/shared/model/afform.model';
import { IAfdatafilter } from 'app/shared/model/afdatafilter.model';

export interface IAfformdatafilter {
  id?: number;
  afsid?: number;
  affid?: number;
  approlecode?: IAfsrole;
  appformcode?: IAfform;
  appdatafiltercode?: IAfdatafilter;
}

export const defaultValue: Readonly<IAfformdatafilter> = {};
