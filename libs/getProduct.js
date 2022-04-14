async function getProduct(uid) {
    const res = await fetch(`https://assignments-dee2d-default-rtdb.firebaseio.com/products/${uid}.json`)
    const product =  await res.json()
    return product
}
export {getProduct}