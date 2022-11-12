import { isEven } from '@weekend/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
