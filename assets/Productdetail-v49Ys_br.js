import{u as c,a as l,j as e,h as n,i as r,k as m}from"./index-DwmU0vGl.js";function x(){const{productdetails:s}=c(t=>t.product),a=l();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full min-h-screen mt-5 place-content-center  justify-center  place-items-center sm:px-1",children:e.jsxs("div",{className:` w-[50%] min-h-[300px] py-2  relative flex gap-3\r
       mx-auto shadow-md bg-white shadow-gray-400 sm:flex-col sm:w-full \r
        md:min-h-[380px] md:w-[70%]`,children:[e.jsx("div",{className:"h-[300px]  w-[50%]  sm:w-full",children:e.jsx("img",{className:"h-full w-full ",src:s==null?void 0:s.image})}),e.jsxs("div",{className:"w-[60%] sm:w-full sm:text-center sm:place-items-center font-bold text-black pt-3",children:[e.jsx("h5",{className:"font-bold",children:s.name}),e.jsx("p",{children:s==null?void 0:s.des}),e.jsxs("p",{className:" text-xl ",children:["$",s==null?void 0:s.price]}),e.jsx("p",{className:"text-green-400 text-sm",children:s.stocks}),e.jsxs("div",{className:" w-full flex  sm:justify-center ",children:[e.jsx("button",{onClick:()=>a(n()),className:"w-16 border-[1px] h-9 border-gray-300 mr-2",children:"-"}),e.jsxs("span",{className:"text-xl mt-1",children:[" ",s.quantity]}),e.jsx("button",{onClick:()=>a(r()),className:"w-16 border-[1px] h-9 border-gray-300 ml-2",children:"+"})]}),e.jsxs("div",{className:"flex gap-2 mt-4 sm:gap-4 text-center place-items-start sm:place-items-center sm:justify-center ",children:[e.jsx("button",{onClick:()=>a(m(s)),className:"w-[120px] h-10 bg-orange-400 ",children:"Addtocart"}),e.jsxs("button",{className:"w-[120px] h-10 bg-orange-400 ",children:["PayNow$",s.price*s.quantity]})]})]})]})})})}export{x as default};
