import { stripe } from '../utils/stripe'

export const getProducts = async (limit: number) => {
    const products = await stripe.products.list({
        limit: limit || 10,
        expand:['data.default_price']
    });
    // console.log('----------------products',JSON.stringify(products, null, 2));
    return products;
}

export const getProdectById = async (productId: number) => {
    const product = await stripe.products.retrieve(productId, {
        expand:['default_price']
    });
    // console.log('----------------product',JSON.stringify(product, null, 2));
    return product;
}
