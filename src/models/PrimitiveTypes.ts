import { isDefined } from '@app/models/Defined';

export const isString = (i: any): i is string => typeof i === 'string';

export const isOptionalString = (i: any): i is string | undefined =>
  !isDefined(i) || isString(i);

export const isNumber = (i: any): i is string => typeof i === 'number';

export const isOptionalNumber = (i: any): i is string | undefined =>
  !isDefined(i) || isNumber(i);
