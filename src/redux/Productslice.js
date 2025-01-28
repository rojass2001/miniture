import { createSlice} from "@reduxjs/toolkit"
//import Category from "../Components/Category";

//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
const INITIAL_STATE={
    allproduct:[],
    filterproducts:[],
    detail:false,
    productdetails:[],
};
 const productslice=createSlice({

    name:'product',
    initialState:INITIAL_STATE,
      
    reducers:{
   
   setproducts:(state,action)=>{
   state.allproduct=action.payload
   }, 
   
   productfilter:(state,action)=>{
    const a= action.payload;
   state.filterproducts=state.allproduct.filter((item)=>item.category===a||item.types===a);
   console.log(state.allproduct) 
    }, 
    pricefilter:(state,action)=>{
        const a= action.payload;
       state.filterproducts=state.allproduct.filter((item)=>item.price<=a);
        }, 
        searchproducts:(state,action)=>{
        state.filterproducts=state.allproduct.filter((item)=>item.name.toLowerCase().includes(action.payload.toLowerCase()))
        },
    productdetailcontain:(state,action)=>{
        const b=action.payload
        const productdetail={...b,quantity:1,subtotal:b.price}
        state.productdetails=productdetail
        console.log(state.productdetails)
        
    },
    increase:(state)=>{
        state.productdetails.quantity+=1
        state.productdetails.subtotal+=state.productdetails.price
    },
    decrease:(state)=>{
        if(state.productdetails.quantity>1){
        state.productdetails.quantity-=1
    }},
    

}})
export const {setproducts,productfilter,increase,decrease,pricefilter,searchproducts,productdetailcontain}=productslice.actions;
export default productslice.reducer;
