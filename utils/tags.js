export function tags (contents) {
  const values = contents.map(_ => _.tags).flat()
  return Array.from(new Set(values)).sort()
}
