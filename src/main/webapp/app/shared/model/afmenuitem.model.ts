import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { IAfform } from 'app/shared/model/afform.model';
import { Linktype } from 'app/shared/model/enumerations/linktype.model';

export interface IAfmenuitem {
  id?: number;
  code?: string;
  afsid?: number;
  name?: string;
  title?: string;
  descr?: string;
  linktype?: Linktype;
  appreflinkurl?: string;
  modulecode?: IAfsysmodule;
  apprefformcode?: IAfform;
}

export const defaultValue: Readonly<IAfmenuitem> = {};
