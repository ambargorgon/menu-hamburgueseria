import { setProductoActivo } from "../../main"
import { handleGetProduct } from "../persistence/localStorage"
import { openModal } from "./modal"

export const handleGetProductToStore = ()=> {
    const products = handleGetProduct()
    handleRenderList(products)
}

export const handleRenderList = (products) => {
    const hamburguesas = products.filter((el) => el.categoria === "Hamburguesas")
    const gaseosas = products.filter((el) => el.categoria === "Gaseosas")
    const papas = products.filter((el) => el.categoria === "Papas")

    const renderProductGroup  = (products,title) => {
        if(products.length  > 0) {
            const productosHTML = products.map((product, index) => {
                return `<div class="section-card" key={${index}} id='product-${product.categoria}-${index}'>
                            <div>
                                <img src='${product.imagen}' />
                                <h2>${product.nombre}</h2>
                            </div>
                            <div>
                                <p><b>Precio: </b> $ ${product.precio} </p>
                                <p><b>Categoria: </b> $ ${product.categoria} </p>
                            </div>
                        </div>`
            })

        return `<section >
                <h3 class="category-title" >${title}</h3>
                <div class="store-section">
                    ${productosHTML.join("")}
                </div>
                </section> `
        }else{
                return ""
        };

    }
        //renderizacion
        const storeContainer = document.getElementById("store-container")
        storeContainer.innerHTML = `
        ${renderProductGroup(hamburguesas, "Hamburguesas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
        ${renderProductGroup(papas, "Papas")}
        `

        const addEvents = (products) => {
            products.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`)

                    productContainer.addEventListener('click', ()=>{
                        setProductoActivo(element)
                        openModal();
                    })
        })
    }

        addEvents(hamburguesas)
        addEvents(gaseosas)
        addEvents(papas)

}