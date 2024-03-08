import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function uuid() {
  return Math.random().toString(16).slice(2);
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
