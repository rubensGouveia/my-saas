export function createSlug(text: string): string {
  // Normalize the text to remove accents
  const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Convert to lowercase
  const lowerCaseText = normalizedText.toLowerCase()

  // Replace spaces and other non-alphanumeric characters with hyphens
  const slug = lowerCaseText.replace(/[^a-z0-9]+/g, '-')

  // Remove leading and trailing hyphens
  return slug.replace(/^-+|-+$/g, '')
}
