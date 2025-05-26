import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value);
}

export function formatPercentage(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value);
}
