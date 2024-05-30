import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
<<<<<<< HEAD
    name: "shop",
=======
    name: "DATE EL GUSTO",
>>>>>>> 77aa8dc1b75ce4fa9a0eba4af60de805dd490466
    initialState: {
        value: {
            categorySelected: "",
            itemIdSelected: "",
        }
    },
    reducers: {
        setCategorySelected : (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected : (state, {payload}) => {
            state.value.itemIdSelected = payload
        }
    }
})

export const {setCategorySelected, setIdSelected} = shopSlice.actions

export default shopSlice.reducer