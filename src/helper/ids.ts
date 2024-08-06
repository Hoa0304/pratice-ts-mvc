export function generateID(length: number = 4): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}
