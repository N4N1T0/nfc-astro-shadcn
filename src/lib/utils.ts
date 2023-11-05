import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Function to give more importance to the classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to format the date to spain format
export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`;
}

// Function capitalize words
export function capitalizer(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function toggleUrl(lang: string, url: URL) {
 const urlSplit = url.pathname.split('/').slice();
  urlSplit[1] = lang;
  return urlSplit.join('/');
}