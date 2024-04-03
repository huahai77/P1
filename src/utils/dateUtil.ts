import dayjs from 'dayjs'
export const dateFormat = (
  date: dayjs.ConfigType,
  format: string = 'YYYY-MM-DD'
): string => {
  return date ? dayjs(date).format(format) : ''
}
