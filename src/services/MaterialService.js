import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL + "material";
class MaterialService {
  //Definición para Llamar al API y obtener el listado de películas
  //localhost:81/api/movie
  getMateriales() {
    return axios.get(BASE_URL);
  }
  //localhost:81/api/movie/2
  getMaterialById(MaterialId) {
    return axios.get(BASE_URL + "/" + MaterialId);
  }
}
export default new MaterialService();