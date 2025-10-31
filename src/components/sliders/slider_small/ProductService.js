const products = [
    { id: '1000', subtitle: 'difficulty: easy', title: "Three-day expeditions for everyone" },
    { id: '1001', subtitle: 'difficulty: hard', title: "Abroad routes beyond Canada’s borders" },
    { id: '1002', subtitle: 'difficulty: medium', title: "Multi-day expeditions with camping" },
    { id: '1003', subtitle: 'difficulty: easy', title: "Three-day expeditions for everyone" },
    { id: '1004', subtitle: 'difficulty: hard', title: "Abroad routes beyond Canada’s borders" },
    { id: '1005', subtitle: 'difficulty: medium', title: "Multi-day expeditions with camping" },
];

export const ProductService = {
    getProducts: () => products,
    getProductsSmall: () => Promise.resolve(products),
};
