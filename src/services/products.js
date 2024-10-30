import { productoActivo } from "../../main";
import { handleGetProduct, setLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";

const submit = document.getElementById("button-accept");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmitForm();
});

const handleSubmitForm = () => {
  const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    imagen = document.getElementById("imagen").value,
    categoria = document.getElementById("categoria").value;

  let object = null;

  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      precio,
      imagen,
      categoria,
    };
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      precio,
      imagen,
      categoria,
    };
  }

  setLocalStorage(object);
  handleGetProductToStore();
  closeModal();
  alert("Producto " + nombre + " añadido correctamente");
};

//Eliminar elemento
export const handleDelete = () => {
  const confirmacion = confirm("¿Estás seguro de eliminar este producto?");
  if (confirmacion) {
    const products = handleGetProduct();
    const result = products.filter((el) => el.id !== productoActivo.id);

    localStorage.setItem("products", JSON.stringify(result));
    const newProducts = handleGetProduct();
    handleRenderList(newProducts);
    alert("Producto eliminado.");
  }

  closeModal();
};
