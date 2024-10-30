import { handleRenderList } from "../views/store";
import { categoriaActiva } from "../../main";
import { handleGetProduct } from "../persistence/localStorage";
// sidebar de categorias
const handleFilter = (categoria) => {
  const products = handleGetProduct();

  switch (categoria) {
    case categoriaActiva:
    case "Todo":
      handleRenderList(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const result = products.filter((el) => el.categoria === categoria);
      handleRenderList(result);
      break;
    case "menorPrecio":
      const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
      handleRenderList(resultPrecioMenor);
      break;
    case "mayorPrecio":
      const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio);
      handleRenderList(resultPrecioMayor);
      break;
    default:
      break;
  }
};

export const renderCategories = () => {
  const categories = document.getElementById("sidebar-filter");
  categories.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

  const liElement = categories.querySelectorAll("li");
  liElement.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      handleClick(liElement);
    });
  });

  const handleClick = (e) => {
    handleFilter(e.id);
    liElement.forEach((el) => {
      if (el.classList.contains("liActive")) {
        el.classList.remove("liActive");
      } else {
        if (e === el) {
          el.classList.add("liActive");
        }
      }
    });
  };
};
