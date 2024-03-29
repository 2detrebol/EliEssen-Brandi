import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [buyer, setBuyer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: ''
    })

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id, productToAdd.IDColor)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(item => {
                if (item.id === productToAdd.id && item.IDColor === productToAdd.IDColor) {
                    const productUpdated = { ...item, quantity: productToAdd.quantity }
                    return productUpdated
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id, IDColor) => {
        return cart.some(product => product.id === id && product.IDColor === IDColor)
    }

    const removeItem = (IDColor) => {
        const newCartWhitoutItem = cart.filter(product => product.IDColor !== IDColor)
        setCart(newCartWhitoutItem)
    }

    const getQuantity = () => {
        let acc = 0
        cart.forEach(product => {
            acc += product.quantity
        })
        return acc
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
        return accu
    }

    const addQuantity = (IDColor) => {
        const newCart = cart.map(product => {
            if (product.IDColor === IDColor) {
                const productUpdated = { ...product, quantity: product.quantity += 1 }
                return productUpdated
            } else {
                return product
            }
        }
        )
        setCart(newCart)
    }

    const lessQuantity = (IDColor) => {
        const newCart = cart.map(product => {
            if (product.IDColor === IDColor) {
                const productUpdated = { ...product, quantity: product.quantity -= 1 }
                return productUpdated
            } else {
                return product
            }
        }
        )
        setCart(newCart)
    }


    return (
        <CartContext.Provider value={{
            cart, addItem, getQuantity, getTotal, isInCart, removeItem, clearCart, lessQuantity, addQuantity, buyer, setBuyer
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;