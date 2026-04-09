import { createSlice } from "@reduxjs/toolkit";

const storedItems=localStorage.getItem('cartItems')
const initialState={
    cartItems:storedItems?JSON.parse(storedItems):[]
};
const CartSlice= createSlice({
    name:'cart', 
       initialState,   
       
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.cartItems.find(Items=>Items._id ===newItem._id)
            if(existingItem){
                existingItem.quantity += newItem.quantity
            }else
            {
                state.cartItems.push({
                    _id:newItem._id,
                    Sname:newItem.Sname,
                    FPnmae:newItem.FPname,
                    Jname:newItem.Jname,
                    TSname:newItem.TSname,
                    Price:newItem.Price,
                    oldPrice:newItem.oldPrice,
                    img:newItem.img,
                    quantity:newItem.quantity

                });

            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },

        
        deleteFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(Items=>Items._id !== action.payload._id);
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        updateQuantity:(state,action)=>{
            const{id,quantity}=action.payload;
            const itemToUpdate=state.cartItems.find(Item=>Item._id===id);
            if(itemToUpdate)
            {
                itemToUpdate.quantity=quantity;
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            }
        }
    }

})
export default CartSlice.reducer
export const {addToCart,deleteFromCart,updateQuantity}=CartSlice.actions