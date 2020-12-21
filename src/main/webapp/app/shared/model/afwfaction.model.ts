import { Moment } from 'moment';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { IAfform } from 'app/shared/model/afform.model';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';

export interface IAfwfaction {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  apprefhandler?: string;
  afsid?: number;
  afmid?: number;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  appmenucode?: IAfmenuitem;
  appformcode?: IAfform;
  appmodulecode?: IAfsysmodule;
  wfcode?: IAfworkflow;
}

export const defaultValue: Readonly<IAfwfaction> = {};
