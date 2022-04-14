
import {PageTitle} from "../components/PageTitle"
import Head from 'next/head'
import ProductCard from "../components/ProductCard/ProductCard"
import { loadStripe } from "@stripe/stripe-js"

// https://assignments-dee2d-default-rtdb.firebaseio.com/products.json



export default function Home(props) {
  const products = props.products.slice(0,3)

  

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <>
    <Head>
      <meta charset="UTF-8"/>
      <meta httpequiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Storefront</title>
    </Head>
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
    },
    revalidate: 60
  }
}

