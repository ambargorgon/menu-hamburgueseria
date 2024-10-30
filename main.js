import { setLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleGetProductToStore } from "./src/views/store";
import "./style.css"


export let categoriaActiva = null;

export const setCategoriaActiva = (categoria) => {
    categoriaActiva = categoria;
}

export let productoActivo = null;

export const setProductoActivo = (producto) => {
    productoActivo = producto;
}


handleGetProductToStore();
renderCategories();

//BUSCADOR
const buttonSearch = document.getElementById('button-search')
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName()
})