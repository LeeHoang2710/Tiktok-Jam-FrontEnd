import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn: (...inputs: ClassValue[]) => string = (...inputs) => {
  return twMerge(clsx(inputs));
}
