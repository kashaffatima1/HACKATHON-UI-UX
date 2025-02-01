import { Product } from "../../../types/products";

export const addtocart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = cart.findIndex(item => item._id === product._id);

    if (existingProduct > -1) {
        cart[existingProduct].quantity += 1;
    }
    else {
        cart.push({
            ...product, quantity: 1
    });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removefromcart = (productID: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    cart = cart.filter(item => item._id !== productID);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const updatecart = (productID: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const productIndex = cart.findIndex(item => item._id === productID);

    if (productIndex > -1) {
        cart[productIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}