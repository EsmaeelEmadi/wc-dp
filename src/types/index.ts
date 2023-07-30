import { Dayjs } from 'dayjs/esm';

export type TLocales = string[];

export enum Calendars {
  Gregory = 'Gregory',
  Jalali = 'Jalali',
}

export enum Entities {
  year = 'year',
  month = 'month',
  date = 'date',
  day = 'day',
  hour = 'hour',
  minute = 'minute',
  second = 'second',
  millisecond = 'millisecond',
}

export enum Parts {
  YYYY = 'YYYY',
  YY = 'YY',
  MMMM = 'MMMM',
  MMM = 'MMM',
  MM = 'MM',
  M = 'M',
  DD = 'DD',
  D = 'D',
  dddd = 'dddd',
  ddd = 'ddd',
  dd = 'dd',
  d = 'd',
  HH = 'HH',
  H = 'H',
  hh = 'hh',
  h = 'h',
  mm = 'mm',
  m = 'm',
  SSS = 'SSS',
  ss = 'ss',
  s = 's',
  Z = 'Z',
  A = 'A',
  a = 'a',
}

export enum CalendarModes {
  Normal = 'Normal',
  Dialog = 'Dialog',
  Modal = 'Modal',
}

// METHODS
export type SetYear = (year: number) => void;

// TYPE GUARDS
export function isCalendar(v: string | null): v is keyof typeof Calendars {
  console.log(typeof v in Calendars);
  if (v) {
    return v in Calendars;
  } else {
    return false;
  }
}

export function isDayjs(date: number | Dayjs): date is Dayjs {
  return typeof date !== 'number';
}
