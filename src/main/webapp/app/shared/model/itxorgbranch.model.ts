import { IItxorganization } from 'app/shared/model/itxorganization.model';

export interface IItxorgbranch {
  id?: number;
  code?: string;
  name?: string;
  localname?: string;
  brachtype?: string;
  orgid?: IItxorganization;
}

export const defaultValue: Readonly<IItxorgbranch> = {};
