import { BUY_PRODUCT, SELL_PRODUCT } from "./actions";

const initialState = {
  balance: 100000000000,
  products: [
    { id: 1, name: "Hamburger", price: 10, quantity: 0 },
    { id: 2, name: "Spor Araba", price: 50000, quantity: 0 },
    { id: 3, name: "Villa", price: 1000000, quantity: 0 },
    { id: 4, name: "İçecek", price: 2, quantity: 0 },
    { id: 5, name: "Bilgisayar", price: 1500, quantity: 0 },
    { id: 6, name: "Telefon", price: 800, quantity: 0 },
    { id: 7, name: "Yanardağ Turu", price: 5000, quantity: 0 },
    { id: 8, name: "Saat", price: 300, quantity: 0 },
    { id: 9, name: "Gitar", price: 400, quantity: 0 },
    { id: 10, name: "Kitap", price: 20, quantity: 0 },
    { id: 11, name: "Tatil Paketi", price: 10000, quantity: 0 },
    { id: 12, name: "Bisiklet", price: 250, quantity: 0 },
    { id: 13, name: "Çanta", price: 50, quantity: 0 },
    { id: 14, name: "Parfüm", price: 60, quantity: 0 },
    { id: 15, name: "Oyuncak", price: 5, quantity: 0 },
    { id: 16, name: "Kamera", price: 700, quantity: 0 },
    { id: 17, name: "Televizyon", price: 1000, quantity: 0 },
    { id: 18, name: "Tatlı", price: 8, quantity: 0 },
    { id: 19, name: "Ayakkabı", price: 80, quantity: 0 },
    { id: 20, name: "T-shirt", price: 25, quantity: 0 },
  ],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      const { productId, price } = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      const updatedProducts = state.products.map((prod) =>
        prod.id === productId ? { ...prod, quantity: prod.quantity + 1 } : prod
      );
      return {
        ...state,
        balance: state.balance - price,
        products: updatedProducts,
        cart: [
          ...state.cart,
          {
            productId,
            productName: product.name,
            quantity: 1,
            price: product.price,
          },
        ],
      };

    case SELL_PRODUCT:
      // Ürünü satma işlemleri
      return state;

    default:
      return state;
  }
};

export default rootReducer;
