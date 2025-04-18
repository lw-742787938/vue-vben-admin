import dayjs from 'dayjs';

export const dateNowForMat = (format: string = 'YYYY-MM-DD') => {
  return dayjs().format(format);
};
export const dateForMat = (date: any, format: string = 'YYYY-MM-DD') => {
  if (!date) date = dayjs();
  return dayjs(date).format(format);
};
