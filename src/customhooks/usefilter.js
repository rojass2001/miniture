import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {  pricefilter, productfilter } from "../redux/Productslice"

function useFilter() {
    const [data,setdata]=useState(30)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    
     const pricecategory=(event)=>{
      setdata(event.target.value)
      dispatch(pricefilter(event.target.value))
      navigate('/filter')
    }
    const handlechange=(event)=>{
        dispatch(productfilter(event.target.value)) 
        navigate('/filter')
  } 
  return {pricecategory,data,handlechange}
}

export default useFilter
