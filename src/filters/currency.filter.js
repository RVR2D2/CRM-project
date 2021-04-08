export default function currencyFilter(value, currency = 'KZT') {
  return new Intl.NumberFormat('kz-KZ', {
    style: 'currency',
    currency
  }).format(value)
}
