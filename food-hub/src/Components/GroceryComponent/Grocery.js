import React, { useEffect, useState } from 'react'
import Grocerycomp from './Grocerycomp'
import Groceryshimmer from './GroceryShimmer'

const Grocery = () => {
   const[grocerylist,SetGroceryList]=useState()
   const[grocerytitle,SetGrocerytitle]=useState()
  useEffect(()=>{
    fetchgrocerydata()
  })
    const fetchgrocerydata=async()=>{
      const data= await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fapi%2Finstamart%2Fhome%3FpageNo%3D2%26layoutId%3D3173%26storeId%3D1383574%26clientId%3DINSTAMART-APP")
        const json=await data.json()
        console.log(json);
        SetGroceryList(json?.data?.widgets[1]?.data);
        SetGrocerytitle(json?.data?.widgets[1]?.widgetInfo)
         //console.log(SetGroceryList);
         //console.log(SetGrocerytitle);
    }
    if(grocerylist===null){
      <Groceryshimmer/>
    }
    if(grocerylist===undefined){
      <Groceryshimmer/>
    }
  return (
    <div>
      <Grocerycomp grocerytitle={grocerytitle} grocerylist={grocerylist}/>
    </div>
  )
}

export default Grocery
