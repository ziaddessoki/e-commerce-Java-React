import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  getTotalItems: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCartStore;
