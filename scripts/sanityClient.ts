// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config();

export const client = createClient({
  projectId: 'process.env.3fpt6pa2', // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: process.env.skoG3Mi7bG9KPivAQ3G7Hb4bi0y07dzhMwr6SKa4K5O4f0n64WQNtilkSHGjAyDnSwlcL4Fos8rH9ZnMnf7ge2MT7A8NhYttYi2YKTulrHdi1lwwSUAyTEtL4sUSnB4COjECZX5WGDxd8CSGKfLna5RXzhx5M6yIiCLLhFZbJOXZgV6AAGwY
  ,
});