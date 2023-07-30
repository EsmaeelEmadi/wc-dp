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
  YYYY,
  YY,
  MMMM,
  MMM,
  MM,
  M,
  DD,
  D,
  dddd,
  ddd,
  dd,
  d,
  HH,
  H,
  hh,
  h,
  mm,
  m,
  SSS,
  ss,
  s,
  Z,
  A,
  a,
}

export enum CalendarModes {
  Normal,
  Dialog,
  Modal,
}

export type SetYear = (year: number) => void;

// type guards
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
