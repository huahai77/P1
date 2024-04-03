import dayjs from 'dayjs'

/**
 * 日期格式化，添加默认格式
 * @param date
 * @param format
 */
export const dateFormat = (
  date: dayjs.ConfigType,
  format: string = 'YYYY-MM-DD'
): string => {
  return date ? dayjs(date).format(format) : ''
}
