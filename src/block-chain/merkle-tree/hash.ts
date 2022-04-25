export function hashCode(data: string) {
  let hash = 0
  if (data.length === 0) return String(hash)
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return String(hash)
}
