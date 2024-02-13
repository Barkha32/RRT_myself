import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUserFood = createAsyncThunk("createUserFood", async(data ,{rejectWithValue}) => {
    const response = await fetch("https://65c54aeddae2304e92e428bd.mockapi.io/api/food", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    });
    try{
        const result  = await response.json();
        return result
    }catch(error){
        return rejectWithValue(error);
    }
})

//read action(home)
export const showFood = createAsyncThunk("showFood", async() => {
    const response =await fetch("https://65c54aeddae2304e92e428bd.mockapi.io/api/food");
    
    try{
        const result =await response.json();
        console.log(result);
        return result;
     

    }catch(error){
        console.log('error', error);
        console.log('data', error.response.data);
        console.log('message', error.response.data.message);
        
        

    }
})

//delete action
export const deleteFood = createAsyncThunk("deleteFood", async(id ) => {
    const response = await fetch(
        `https://65c54aeddae2304e92e428bd.mockapi.io/api/food/${id}`,
         {method:"DELETE"}
         );
    try{
        const result =await response.json();
        console.log(result);
        return result;
     

    }catch(error){
        console.log('error', error);
        console.log('data', error.response.data);
        console.log('message', error.response.data.message);
        
    }
})

//update action
export const UpdateFood = createAsyncThunk("UpdateFood", async(data ,{rejectWithValue}) => {
    console.log("updateddata: ", data);
    const response = await fetch(`https://65c54aeddae2304e92e428bd.mockapi.io/api/food/${data.id}`, {
        method:"PUT",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    });
    try{
        const result  = await response.json();
        return result
    }catch(error){
        return rejectWithValue(error);
    }
})


export const foodDetail =createSlice({
    name: "foodDetail",
    initialState: {
        foodsdata: [],
        loading: false,
        error: null,
    },
        extraReducers:(builder) => {
            builder.addCase(createUserFood.pending , (state) =>{
                state.loading =true;
            });
            builder.addCase(createUserFood.fulfilled, (state, action) =>{
                state.loading = false;
                state.foodsdata.push(action.payload);
            });
            builder.addCase(createUserFood.rejected , (state,action) =>{
                state.loading =false;
                state.foodsdata = action.payload;
            });
            builder.addCase(showFood.pending , (state) =>{
                state.loading =true;
            });
            builder.addCase(showFood.fulfilled, (state, action) =>{
                state.loading = false;
                state.foodsdata = action.payload;
            });
            builder.addCase(showFood.rejected , (state,action) =>{
                state.loading =false;
                state.foodsdata = action.payload;
            });
           // deleteFood
           builder.addCase(deleteFood.pending , (state) =>{
            state.loading =true;
        });
        builder.addCase(deleteFood.fulfilled, (state, action) =>{
            state.loading = false;
            const {id} = action.payload;
            if(id){
                state.foodsdata= state.foodsdata.filter((food) => food.id !==id);
                
            }
        });
        builder.addCase(deleteFood.rejected , (state,action) =>{
            state.loading =false;
            state.foodsdata = action.payload;
        });
        builder.addCase(UpdateFood.pending , (state) =>{
            state.loading =true;
        });
        builder.addCase(UpdateFood.fulfilled, (state, action) =>{
            state.loading = false;
            state.foodsdata = state.foodsdata.map((ele) => 
                ele.id=== action.payload.id  ? action.payload : ele);
        });
        builder.addCase(UpdateFood.rejected , (state,action) =>{
            state.loading =false;
            state.foodsdata = action.payload;
        });
       
        },   
});
export const userActions = foodDetail.actions;
export default foodDetail.reducer;