import { IItxcountry } from 'app/shared/model/itxcountry.model';

export interface IItxcity {
  id?: number;
  name?: string;
  localname?: string;
  phonecode?: string;
  countryisocode?: IItxcountry;
}

export const defaultValue: Readonly<IItxcity> = {};
