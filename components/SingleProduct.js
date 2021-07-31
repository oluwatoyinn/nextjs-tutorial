import Link from 'next/link'
import productStyle from '../styles/product.module.css'


const SingleProduct = ({product}) => {
    return (
        <Link href="/product/[id]" as={`/product/${product.id}`} >
            <a className={productStyle.card}>
                <h4 >{product.title}</h4>
                <p> {product.body} </p>
            </a>
        </Link>
    )
}
export default SingleProduct
