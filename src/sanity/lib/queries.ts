import { defineQuery } from "next-sanity";

export const allproducts = (id: string) => defineQuery(`
    
    *[_type == "product" &&  _id == "${id}"]{
    category,
    _id,
    name,
    description,
    price,
    dimensions,
    features,
    quantity,
    tags,
    "image" : image.asset->url,
    }`)

    export const fourPro = defineQuery(`
    *[_type == "product"][0..3]{
    _id,
    name,
    category,
    description,
    price,
    dimensions,
    features,
    quantity,
    tags,
    "image" : image.asset->url,`)