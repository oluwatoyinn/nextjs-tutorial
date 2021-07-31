import SingleProduct from "./SingleProduct";
import productStyle from '../styles/product.module.css'

const Products = ({products}) => {
    return (
        <div className={productStyle.grid}>
            {products.map((product)=>(
                <SingleProduct product={product}/>
            ))}
        </div>
    )
}

export default Products
