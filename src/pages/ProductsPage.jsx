import axios from "axios"
import { useState, useEffect } from "react"
import style from "./ProductsPage.module.css"

function ProductsPage() {

    const [dataProducts, setDataProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").catch((error) => console.log(error)).then((res) => {
            setDataProducts(res.data)
        })
    }, [])

    useEffect(() => { console.log(dataProducts) }, [dataProducts])

    return <>
        <h2>Our Product List</h2>
        <div className={style.flexContainer}>
            {dataProducts.map((product) => {
                return <div key={product.id} className={style.card}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.price}€ - Rated: {product.rating.rate}</p>
                </div>
            })}
        </div>
    </>
}

export default ProductsPage