import { createContext, useState } from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []) 

    const cartAddItem = item => {
        const newCart = [...cart, item]

        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const cartUpdateQuantity = (item_id, quantity) => {
        const idx = Object.values(cart).findIndex(obj => obj.item.id == item_id)

        const new_cart = [...cart]
        new_cart[idx].quantity = quantity

        setCart(new_cart)
        localStorage.setItem('cart', JSON.stringify(new_cart))
    }

    const cartRemoveItem = item_id => {
        const idx = Object.values(cart).findIndex(obj => obj.item.id == item_id)
        const new_cart = cart.filter((obj, _idx) => _idx != idx)

        setCart(new_cart)
        localStorage.setItem('cart', JSON.stringify(new_cart))
    }

    const cartIncludes = item => {
        return Object.values(cart).some(_item => _item.item.id == item.id);
    }

    const cartTotalCost = () => {
        return cart.reduce((accumulator, obj) => accumulator + obj.item.price * obj.quantity, 0);
    }

    return (
        <CartContext.Provider value={{
            cart, 
            cartAddItem, 
            cartIncludes, 
            cartRemoveItem, 
            cartUpdateQuantity,
            cartTotalCost
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}