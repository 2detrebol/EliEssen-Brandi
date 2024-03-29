import React, { useContext } from 'react'
import './CartWidget.css'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContex';


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const colorQuantityBack = quantity > 0 ? '#E5781A' : '#000'
    const colorQuantityNumber = quantity > 0 ? '#000' : '#E5781A'

    return (
        quantity > 0 ? (
            <div className="animate__animated animate__fadeInRight">
                <Link className="cartWidget" to={`/cart`}>
                    <BsCart3 className="cartLogo" />
                    <span className="cartMenuNum" style={{ backgroundColor: colorQuantityBack, color: colorQuantityNumber }}>{quantity}</span>
                </Link>
            </div>
        ) : (
            <div></div>
        )
    )
}

export default CartWidget;

