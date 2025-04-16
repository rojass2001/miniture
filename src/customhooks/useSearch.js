import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchproducts } from "../redux/Productslice"

function useSearch() {
    const dispatch = useDispatch()
    const navigate=useNavigate()
const [search,setsearch]=useState("")
    const handlechange = (e) => {
    setsearch(e.target.value)
    }
    const submit=(e)=>{
      e.preventDefault()
      dispatch(searchproducts(search)) 
      navigate('/filter')
    } 
      
  return {search,handlechange,submit}
}

export default useSearch
