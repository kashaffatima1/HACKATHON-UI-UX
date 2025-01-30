
export interface Product{
    _id: string;
    name: string;
    category: string;
    _type: "product";
    image: {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    slug:{
        _type: "slug";
        current: string;
    }
    quantity: number;
    description: string;
    features: string[];
    dimensions: {
        height: string;
        width: string;
        depth: string;
    };
    tags: string[];

}