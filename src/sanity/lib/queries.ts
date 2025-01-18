import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    
    *[_type == "product"]{
    _id,
    name,
    description,
    price,
    dimensions,
    features,
    quantity,
    tags,
    "imagesUrl" : image.asset->url,
    }`)

    export const fourPro = defineQuery(`
    *[_type == "product][0..3]{
    _id,
    name,
    description,
    price,
    dimensions,
    features,
    quantity,
    tags,
    "imagesUrl" : image.asset->url,`)