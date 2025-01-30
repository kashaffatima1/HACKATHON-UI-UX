import { createClient } from "next-sanity";


const client = createClient({
    projectId: "3fpt6pa2",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
})

    export async function sanityFetch({query, params = {}}: {query: string, params?: object}) {
        return await client.fetch(query, params);
    }