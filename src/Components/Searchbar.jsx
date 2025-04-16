import Form from './Form';
import useSearch from '../customhooks/useSearch';

function Searchbar() {
  const{submit,handlechange,search}=useSearch()
 
  return (
 <div className='w-full h-8  bg-white place-items-end pr-5 '>
    <Form className='flex h-8 gap-1 items-center' >
         <input className='w-[150px] h-7 rounded-full pl-2 border-[1px] text-sm border-black sm:w-[120px]' 
         placeholder='search products' value={search}  onChange={handlechange} type="text"/>
        <button type="submit" onClick={submit} className='bg-sky-500 w-14 h-7 text-sm rounded-full'>Search</button>
    </Form>
  </div>
  )
}

export default Searchbar
