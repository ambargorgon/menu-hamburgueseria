import { handleGetProduct } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
  const inputHeader = document.getElementById("input-header");
  const products = handleGetProduct();

  const result = products.filter((el) =>
    el.nombre.toLowerCase().includes(inputHeader.value)
  );

  handleRenderList(result)
};
