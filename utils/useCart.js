import React, { useEffect, useContext, useState } from 'react'
import {ProductCtx} from '../app/components/Provider'

export const useCart = () => {

    const {cartItems, setCartItems} = useContext(ProductCtx)
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
      setCartCount(cartItems.length)
      // find total price
        calculateTotal()
        poplulateCart()

    },[cartItems])

// {
//   name:'p',
//   price:200,
//   discription:'sdfsdf',
//   quantity:1
// }
 const poplulateCart = ()=>{
  // if items are in localstorate but not in context (happens when /////page is refreshed)
  if(cartItems.length == 0){  
    const products = JSON.parse(localStorage.getItem('product'));
    if(products){
      setCartItems(products)
    }
  }
  }
const calculateTotal = ()=>{
  let amt = 0;
  cartItems.forEach(item=>{
    amt += item.price * item.quantity
  })
  setCartTotal(amt);
}

    const addItem = (product)=>{
      // check if item allready exist in cart
      const exisistingProductIndex = cartItems.findIndex((item)=>item.id ==product.id);
      const updateCart = [...cartItems]
      if(exisistingProductIndex != -1){
        updateCart[exisistingProductIndex].quantity +=1
      } else {
        updateCart.push({...product,quantity:1})
      }
localStorage.setItem('product',JSON.stringify(updateCart));
      setCartItems(updateCart)

    // else item add
    }
    const deleteById = (productId) =>{
      const NewProducts = cartItems.filter(product=>productId != product.id ) 
      setCartItems(NewProducts);
      if(NewProducts.length ==0){
        localStorage.removeItem('products')
      }else {
        localStorage.setItem('products',JSON.stringify(NewProducts));
      }
    }

    const deleteAllItems = ()=>{
      localStorage.removeItem('product')
      setCartItems([]);
    }

    const incrementCartItems = (productId)=>{
      const newProducts =  cartItems.map(item=>{
        if(item.id==productId){
          return {
            ...item,
            quantity:item.quantity+1
          }
        } else {
          return item
        }
      })
      localStorage.setItem('product',JSON.stringify(newProducts));
      setCartItems(newProducts);
    }
    
    const decrementCartItems = (productId)=>{
      const newProducts = cartItems.map(item=>{
        if(item.id==productId && item.quantity>1){
          return {
            ...item,
            quantity:item.quantity-1
          }
        } else {
          return item
        }
      })
      localStorage.setItem('product',JSON.stringify(newProducts));
      setCartItems(newProducts)
    }
    
  return {cartCount, cartTotal,cartItems, addItem, deleteAllItems, deleteById, incrementCartItems, decrementCartItems}
}



// i dont know why this does not work so i exported up
//  export default useCart