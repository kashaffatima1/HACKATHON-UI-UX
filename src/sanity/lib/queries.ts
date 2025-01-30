import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product" ]`;
export const five = groq`*[_type == "product"][0..5]`;
export const three = groq`*[_type == "product"][0..2]`;

