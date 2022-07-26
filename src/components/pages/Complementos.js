import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const Complementos = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products.filter(product => product.category !== "Cacerola" && product.category !== "Sarten"))
        })
    }, [])

    return (
        <div>
            <h1 className="nombreApp animate__animated animate__bounceIn animate__delay-1s">Complementos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default Complementos
