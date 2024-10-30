export const handleGetProduct = () => {
    const products = JSON.parse(localStorage.getItem('products'))

    if(products){
        return products
    }else{
        return []
    }
}


export const setLocalStorage = (product) => {
if(product){
    let productsInLocal = handleGetProduct();
    const existingIndex = productsInLocal.findIndex((productLocal) => {
        productLocal.id === product.id
    })

    if(existingIndex !==  -1){
        productsInLocal[existingIndex] = product
    }else{
        productsInLocal.push(product)
    }

    localStorage.setItem('products', JSON.stringify(productsInLocal))
}
}