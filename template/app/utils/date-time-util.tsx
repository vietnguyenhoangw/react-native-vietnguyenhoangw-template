import moment from 'moment';
import i18n from 'react-native-i18n';

// convert to DD/MM/YYYY format
export const toDMY = (date: string): string => {
  const dateFormat = moment(new Date(date)).format('DD/MM/YYYY');
  return dateFormat;
};

// convert to YYYY/MM/DD format
export const toYMD = (date: string): string => {
  const dateFormat = moment(new Date(date)).format('YYYY/MM/DD');
  return dateFormat;
};

// convert to DD/MM/YYYY with HH:mm format
export const toDMYwH = (date: string): string => {
  const dateFormat = moment(new Date(date)).format('DD/MM/YYYY - HH:mm');
  return dateFormat;
};

// convert to S
export const toGetTimeS = (date: string): number => {
  const dateFormat = new Date(date).getTime() / 1000;
  return dateFormat;
};

// add days format DD/MM/YYYY
export const addDay = (date: any, days: any) => {
  var currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + days);
  return moment(currentDate).format('DD/MM/YYYY');
};

export const updateLocale = (language: string) => {
  moment.updateLocale(language, {
    relativeTime: {
      future: 'in %s',
      past: `%s ${i18n.t(`ago`)}`,
      s: `${i18n.t(`aFewSecond`)}`,
      ss: `%d ${i18n.t(`second`)}`,
      m: `${i18n.t(`aMinute`)}`,
      mm: `%d ${i18n.t(`minute`)}`,
      h: `${i18n.t(`anHour`)}`,
      hh: `%d ${i18n.t(`hour`)}`,
      d: `${i18n.t(`aDay`)}`,
      dd: `%d ${i18n.t(`day`)}`,
      w: `${i18n.t(`aWeek`)}`,
      ww: `%d ${i18n.t(`week`)}`,
      M: `${i18n.t(`aMonth`)}`,
      MM: `%d ${i18n.t(`month`)}`,
      y: `${i18n.t(`aYear`)}`,
      yy: `%d ${i18n.t(`year`)}`,
    },
  });
};
