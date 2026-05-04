import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines classNames with tailwind-merge to avoid conflicts
 * @param {...any} inputs - Class names to merge
 * @returns {string} - Merged class name string
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
