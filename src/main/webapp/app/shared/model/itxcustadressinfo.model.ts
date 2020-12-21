import { IItxcountry } from 'app/shared/model/itxcountry.model';
import { Addrtype } from 'app/shared/model/enumerations/addrtype.model';

export interface IItxcustadressinfo {
  id?: number;
  addrtype?: Addrtype;
  addresstxt?: string;
  addrline1?: string;
  addrline2?: string;
  postcode?: string;
  street1?: string;
  street2?: string;
  street3?: string;
  town?: string;
  county?: string;
  city?: string;
  country?: IItxcountry;
}

export const defaultValue: Readonly<IItxcustadressinfo> = {};
