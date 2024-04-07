import {createSlice} from '@reduxjs/toolkit' 


const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increase:(state)=>{
            state.count= state.count+1  
        },
        decrease:(state)=>{
            state.count= state.count -1  
        },
         reset:(state)=>{
            state.count= 0 
        },
        increaseby5:(state,action)=>{
            state.count= state.count+action.payload
        },
        decreaseby5:(state,action)=>{
            state.count= state.count-action.payload
        }
    }

})
export const{increase,decrease,reset,increaseby5,decreaseby5}=counterSlice.actions;
export default counterSlice.reducer;