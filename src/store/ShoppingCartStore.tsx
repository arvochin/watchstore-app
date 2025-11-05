import {create} from 'zustand';

export interface WatchProps {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ShoppingCartProps {
  cartItems: WatchProps[];
  addItemToCart: (item: WatchProps) => void;
  removeItemFromCart: (itemId: number) => void;
}

const useShoppingCart = create<ShoppingCartProps>((set) => ({
    cartItems: [],
    addItemToCart: (item) => set((state) => ({cartItems: [...state.cartItems, item]})),
    removeItemFromCart: (itemId) => set((state) => ({cartItems: state.cartItems.filter(item => item.id !== itemId)})),
}));

export default useShoppingCart;