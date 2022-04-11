
import {PageTitle} from "../components/PageTitle"

import ProductCard from "../components/ProductCard/ProductCard"

// https://assignments-dee2d-default-rtdb.firebaseio.com/products.json


export default function Home(props) {
  const products = props.products
  return (
    <>
      <PageTitle title="Storefront" tagline="featured products"/>
      <main>
        {
          products.map(product => <ProductCard key={product.uid} product={product}/>)
        }
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://assignments-dee2d-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json()
  const products = Object.values(productData)

  return {
    props:{
      products
    }
  }
}
