const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(variant) {
            this.updateImage(variant.image);
            this.inStock = variant.quantity > 0;
        }
    },
    computed: {
        title() {
            return this.onSale ? 
                this.brand + ' ' + this.product + ' is on sale!' :
                this.brand + ' ' + this.product;
        }
    }
})
