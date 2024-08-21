import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct=createAsyncThunk("/products",async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    console.log(response?.data)
    return response?.data
})
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        isLoading:false,
        products:[],
        cart:[],
        quantity:[],
        error:null
    },
    reducers:{
        CART:(state,action)=>{
            const itemsInCart=state.cart.find((item)=> item?.id===action?.payload?.id)
            if(itemsInCart){
             itemsInCart.quantity++
            }
            else{
                state.cart.push({...action.payload,quantity:1})
            }

        },
        removeItem:(state,action)=>{
            const existingItem=state.cart.find((item)=> item?.id===action?.payload?.id)
            if(existingItem && existingItem!==1){
                existingItem.quantity--
            }
            else{
                state.cart=state.cart.filter((item)=> item.id!==action?.payload?.id)

            }
        },
        clearBasket:(state,action)=>{
            const upDatedItem=state.cart.filter((item)=> item.id!==action?.payload?.id)
            state.cart=upDatedItem
          }
    
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.products=action?.payload
            state.error=null
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.products=[]
            state.error=action.error.message
        })

    }
})
export const {CART,removeItem,clearBasket}=ProductSlice.actions
export default ProductSlice.reducer