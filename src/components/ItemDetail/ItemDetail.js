import React from 'react';
import "./ItemDetail.css";

const ItemDetail = ({ img, name, description, category, price, color }) => {
    let colores = () => {
        switch (color) {
            case "terra":
                return "#786B60";
            case "aqua":
                return "#519692";
            default: return "#5E1519";
        }
    }

    return (
        <div className="containerItemDetail">
            <div className="imgBxItemDetail">
                <span>{name}</span>
                <img src={img} alt={name} className="animate__animated animate__fadeInUp animate__delay-3s" />
                <p className="productDetailColors" >
                    <span className="aqua" ></span>
                    <span className="terra active"></span>
                    <span className="cherry"></span>
                </p>
            </div>
            <div className="detailsItemDetail">
                <div className="contentItemDetail">
                    <h2 style={{ color: colores() }}>{category}</h2>
                    <p>{description}</p>
                    <h3>$ {price}</h3>
                    <button style={{ backgroundColor: colores() }}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail