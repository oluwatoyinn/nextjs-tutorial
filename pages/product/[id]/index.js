import {useRouter} from "next/router";
import Link from "next/link";

const product = ({product}) => {
    // const router = useRouter()
    // const {_id} = router.query
    return (
        <>
            <h1> {product.title} </h1>
            <p> {product.body} </p>
            <br/>
            <Link href="/">Go Home</Link>
        </>
    )
}

export const getStaticProps = async (context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },}
    )
    const product = await res.json()
    return{ 
        props:{
            product 
        }
    }
}

export const getStaticPaths = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const products = await res.json()

    const ids = products.map(product=>product.id)
    const paths =ids.map(id=>({params:{id:id.toString()}}))
    return{
        // paths:{params:{id:'1',id:'2'}}
        paths,
        fallback:false
    }
}

export default product
