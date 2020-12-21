import { IItxcountry } from 'app/shared/model/itxcountry.model';

export interface IItxdictionary {
  id?: number;
  termname?: string;
  type?: string;
  countryisocode?: IItxcountry;
}

export const defaultValue: Readonly<IItxdictionary> = {};
