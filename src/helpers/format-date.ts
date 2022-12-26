export function formatDate(date: Date | string) {
  const dateNormalized = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(dateNormalized);
}
