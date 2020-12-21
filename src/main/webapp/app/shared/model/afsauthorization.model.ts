import { IAfsrole } from 'app/shared/model/afsrole.model';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';

export interface IAfsauthorization {
  id?: number;
  authtype?: string;
  afsid?: number;
  afsid2?: number;
  afwid?: number;
  rolecode?: IAfsrole;
  acccode?: IAfwfaction;
  modulecode?: IAfsysmodule;
  menuitemcode?: IAfmenuitem;
}

export const defaultValue: Readonly<IAfsauthorization> = {};
