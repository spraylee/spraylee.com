export function createList<T>(length: number, createMethod: (index: number) => T): T[] {
  return [...Array(length)].map((i, j) => createMethod(j))
}
