import Head from 'next/head'
import Products from "../components/Products";

export default function Home({products}) {
  console.log(products);
  
  return (
    <div >
      <Head>
        <title>Welcome Home</title>
      </Head>
      <Products products={products} />
    </div>
  )
}

// Data fetching
// There are three methods you can use to fetch data
// 1. getStaticProps
// 2. getStaticPaths
// 3.getServerSideProps

export const getStaticProps =async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
  const products = await res.json()

  return{
    props:{
      products
    }
  }
}