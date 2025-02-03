import { createClient } from "next-sanity";


const client = createClient({
    projectId: "3fpt6pa2",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
})

    export async function sanityFetch({query, params = {}}: {query: string, params?: object}) {
        return await client.fetch(query, params);
    }