//26. Create a class Order with list of products. Add method to calculate total price.
class Order {
    private products: { name: string; price: number }[];

    constructor(products: { name: string; price: number }[]) {
        this.products = products;
    }

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}