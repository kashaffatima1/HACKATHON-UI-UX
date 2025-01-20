import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    
    *[_type == "product" && _id == $id]{
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
    *[_type == "product" && _id == $id][0..3]{
    _id,
    name,
    description,
    price,
    dimensions,
    features,
    quantity,
    tags,
    "image" : image.asset->url,`)