import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: {
            user: "userIdLogged",
            updatedAt: new Date().toLocaleString(),
            total: 0, 
            items: [], 
        },
    },
    reducers: {
        addCartItem: (state, action) => {
            
            const productExists = state.value.items.some(item => item.id === action.payload.id);

            if (productExists) {
                // Si el producto ya existe, incrementamos la cantidad
                const existingProductIndex = state.value.items.findIndex(item => item.id === action.payload.id);
                const updatedItems = [...state.value.items];
                updatedItems[existingProductIndex].quantity += action.payload.quantity;
                const total = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                state.value = {
                   ...state.value,
                    items: updatedItems,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            } else {
                // Si el producto no existe, lo agregamos
                state.value.items.push(action.payload);
                const total = state.value.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                state.value = {
                   ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            }
        },
        removeCartItem: (state, action) => {
            // Lógica para remover producto
            const productToRemove = state.value.items.find(item => item.id === action.payload.id);
            if (productToRemove) {
                const updatedItems = state.value.items.filter(item => item.id!== action.payload.id);
                const total = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                state.value = {
                   ...state.value,
                    items: updatedItems,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            }
        },
    },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
