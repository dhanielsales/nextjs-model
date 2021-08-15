export function onlyNumbers(value: string): string {
  value = String(value);
  return value.replace(/\D/g, '');
}

// 00000-000
export function cepMask(value: string): string {
  const valueOnlyNumbers = onlyNumbers(value);

  // Definindo o tamanho minimo para o CEP
  const cep = valueOnlyNumbers.padStart(8, '0');

  return cep
    .replace(/(\d{2})(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
    .replace(' ', '');
}

export function capitalize(value: string): string {
  value = String(value);
  return value.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}
