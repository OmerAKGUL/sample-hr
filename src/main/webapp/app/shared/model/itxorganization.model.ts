import { Moment } from 'moment';
import { IItxcountry } from 'app/shared/model/itxcountry.model';

export interface IItxorganization {
  id?: number;
  commtitle?: string;
  localcommtitle?: string;
  sector?: string;
  segment?: string;
  traderegno?: string;
  hqaddress?: string;
  enterprisetype?: string;
  registerdate?: string;
  swiftcode?: string;
  wwwaddr?: string;
  regcountry?: IItxcountry;
}

export const defaultValue: Readonly<IItxorganization> = {};
