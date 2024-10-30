// LOGICA POPUP

import { productoActivo, setProductoActivo } from "../../main";
import { handleDelete } from "../services/products";


const buttonClose = document.getElementById('button-close');
buttonClose.addEventListener("click", ()=>{
    closeModal();
})

const buttonAdd = document.getElementById('buttonAdd')
buttonAdd.addEventListener('click', () => {
    openModal();
})

export const openModal = ()=>{
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'flex'

    if(productoActivo){
        const deleteButton = document.getElementById("button-delete")
        deleteButton.style.display = "block"
    }else{
        const deleteButton = document.getElementById("button-delete")
        deleteButton.style.display = "none"
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        precio = document.getElementById("precio"),
        imagen = document.getElementById("imagen"),
        categoria = document.getElementById("categoria");
    
        nombre.value = productoActivo.nombre;
        precio.value = productoActivo.precio;
        imagen.value = productoActivo.imagen;
        categoria.value = productoActivo.categoria;
    }
}

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'none'
    resetModal()
    setProductoActivo(null)
}


const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
    precio = document.getElementById("precio"),
    imagen = document.getElementById("imagen"),
    categoria = document.getElementById("categoria");

    nombre.value = "";
    precio.value = "Precio";
    imagen.value = "";
    categoria.value = "Seleccione una categoria";

}

const deleteButton = document.getElementById("button-delete")
deleteButton.addEventListener("click",  ()=>{
    handleDelete()
})

