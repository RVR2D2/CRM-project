export default function dateFilter(value, format = 'date') {
  //Формат даты и времени
  const options = {}

  //Проверям на дату
  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }

  //Проверяем на время
  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
