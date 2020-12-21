import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';

export interface IItxaccounttinfo {
  id?: number;
  srcsysacccode?: string;
  typeid?: IItxaccounttype;
  srcsyscode?: IAfsystem;
  ownercustid?: IItxcustinfo;
}

export const defaultValue: Readonly<IItxaccounttinfo> = {};
