import {createSlice} from "@reduxjs/toolkit";
const initialState=  {
    items:[
        
    ],
    totalQuantity:0,
};
const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers:{
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price:newItem.price,
                    qty:1,
                    totalprice:newItem.price,
                    name:newItem.name,
                    image:newItem.image,
                    calories:newItem.calories
                });
            }
            else{
                existingItem.qty++;
                existingItem.totalprice = existingItem.totalprice + newItem.price;
            }
           // state.push(action.payload); //we'll add new (action.payload) old aitems into new(state)
        },
        removeItemFromCart(state,action){
            const id= action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity-- ;
            state.changed =true;
            if(existingItem.qty ===1 ){
                state.items= state.items.filter((item) => item.id !==id);
            }else {
                existingItem.qty--;
               // existingItem.totalprice = existingItem.totalprice - existingItem.price;
            }
        },
        reset: () =>  initialState
    
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;