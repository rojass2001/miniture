import{j as s,a as r,u as l,e as n,f as c,g as i,h as o,L as d,i as m,b as x,r as h,y as u}from"./index-DgYss6FK.js";import{P as j}from"./Pageheading-DFqnJSsO.js";function g(){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-full pt-[40px] text-center justify-center h-screen",children:s.jsx("h1",{className:"font-bold text-black",children:"Your cart Is Empty"})})})}function p(){const t=r(),{cartproducts:a}=l(e=>e.cart);return s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-[75%]  mt-3 sm:w-full",children:a==null?void 0:a.map(e=>s.jsxs("div",{className:"w-full  bg-white p-2 shadow-md shadow-gray-400  mb-3 flex gap-3 h-[200px]  ",children:[s.jsx("img",{className:"h-full w-[30%] sm:w-[50%] ",src:e.image}),s.jsxs("div",{className:"w-[70%] bg-white  flex flex-col space-y-2 text-black font-bold sm:w-[50%]",children:[s.jsx("h4",{className:"font-bold",children:e.name}),s.jsxs("h4",{className:"font-bold text-xl",children:["$",e.price]}),s.jsxs("div",{className:"flex mt-2  items-center",children:[s.jsx("button",{onClick:()=>t(n(e.id)),className:`w-14 h-7 bg-white border-2 mr-2\r
        border-gray-300`,children:"-"}),e.quantity,s.jsx("button",{onClick:()=>t(c(e.id)),className:`w-14 h-7 bg-white border-2 ml-2\r
        border-gray-300`,children:"+"})]}),s.jsxs("h6",{className:"text-md font-bold",children:["Subtotal:$",e.subtotal]}),s.jsx(i,{onClick:()=>t(o(e)),className:"ml-3"})]})]},e.id))})})}function f(){const{cartproducts:t,totalprice:a}=l(e=>e.cart);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-[20%] border-2 h-[215px] place-content-center space-y-3 mx-auto border-black p-2  rounded-3xl  bg-white sm:w-[80%]",children:[s.jsxs("div",{className:"carttotal ",children:["Total Items:",s.jsx("span",{children:t.length})]}),s.jsxs("div",{className:"carttotal",children:["Subtotal:",s.jsx("span",{children:a})]}),s.jsxs("div",{className:"carttotal",children:["Total:",s.jsxs("span",{children:["$",a]})]}),s.jsxs("div",{className:"buttoncontain",children:[s.jsxs("button",{className:"buttons bg-blue-950 ",children:["Paynow$",a]}),s.jsx(d,{to:"/shop",children:s.jsx("button",{className:"buttons bg-blue-950 ",children:"continue shop"})})]})]})})}function b(){const{cartproducts:t}=l(a=>a.cart);return s.jsxs(s.Fragment,{children:[s.jsx(j,{head:"Your cart"}),t.length<1?s.jsx(g,{}):s.jsxs("div",{className:"w-full relative gap-2 flex mt-3 sm:flex-col-reverse sm:p-2",children:[s.jsx(p,{}),s.jsx(f,{})]})]})}function v(){const t=JSON.parse(m.get("login")),a=x();return h.useEffect(()=>{console.log(t),t===!1&&(u.warning("please login"),a("/login"))},[]),s.jsx(s.Fragment,{children:s.jsx(b,{})})}export{v as default};
