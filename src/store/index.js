import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, qty: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),

  inc: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  dec: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId && item.qty >= 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => (item.qty < 1 ? item.id !== productId : item)),
    })),

  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.qty, 0);
  },

  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  },
}));

export default useCartStore;
