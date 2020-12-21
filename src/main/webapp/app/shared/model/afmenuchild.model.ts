import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';

export interface IAfmenuchild {
  id?: number;
  afmid?: number;
  menuitemcode?: IAfmenuitem;
  childcode?: IAfmenuitem;
}

export const defaultValue: Readonly<IAfmenuchild> = {};
