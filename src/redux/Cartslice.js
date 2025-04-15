import { toast } from "react-toastify";
import { createSlice} from "@reduxjs/toolkit"
const INITIAL_STATE={
    cartproducts:[] ,
    totalprice:0,
   
};
 const cartslice=createSlice({

    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
   
 addtocart:(state,action)=>{
         const newitem=action.payload;
         const itemindex=state.cartproducts.find((item)=>item.id===newitem.id);
  if (itemindex){
    toast.error(itemindex.name + " already exist in cart")
  }
  else{
    state.cartproducts.push({
        id:newitem.id,
        image:newitem.image,
        name:newitem.name,
        price:newitem.price,
        category:newitem.category,
        quantity:newitem.quantity?newitem.quantity:1, 
        subtotal:newitem.subtotal?newitem.subtotal:newitem.price
         
    })
   toast.success(newitem.name + " added successfully to cart")  
   state.totalprice+=newitem.subtotal?newitem.subtotal:newitem.price; 
  
}

  },
  cartincrease:(state,action)=>{
    const cartitem=action.payload;
      const itemindex=state.cartproducts.find((item)=>item.id===cartitem);
      if(itemindex){
    itemindex.quantity+=1
    state.totalprice+=itemindex.price;
    itemindex.subtotal+=itemindex.price
  }
},
cartdecrease:(state,action)=>{
  const cartitem=action.payload;
    const itemindex=state.cartproducts.find((item)=>item.id===cartitem);
    if(itemindex&&itemindex.quantity>1){
  itemindex.quantity-=1
  state.totalprice-=itemindex.price;
  itemindex.subtotal-=itemindex.price
}
},
removecart:(state,action)=>{
  const cartitem=action.payload;
    const itemindex=state.cartproducts.findIndex((item)=>item.id===cartitem.id);
    if(itemindex>=0){
  state.totalprice-=cartitem.subtotal;
  state.cartproducts.splice(itemindex,1)
}
}
}})

         
export const {addtocart,cartincrease,cartdecrease,removecart}=cartslice.actions;
export default cartslice.reducer;