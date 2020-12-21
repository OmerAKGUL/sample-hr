import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { IItxcustadressinfo } from 'app/shared/model/itxcustadressinfo.model';

export interface IItxcustaddress {
  id?: number;
  custid?: IItxcustinfo;
  addrid?: IItxcustadressinfo;
}

export const defaultValue: Readonly<IItxcustaddress> = {};
