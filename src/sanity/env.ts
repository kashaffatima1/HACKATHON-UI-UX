export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skoG3Mi7bG9KPivAQ3G7Hb4bi0y07dzhMwr6SKa4K5O4f0n64WQNtilkSHGjAyDnSwlcL4Fos8rH9ZnMnf7ge2MT7A8NhYttYi2YKTulrHdi1lwwSUAyTEtL4sUSnB4COjECZX5WGDxd8CSGKfLna5RXzhx5M6yIiCLLhFZbJOXZgV6AAGwY",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
