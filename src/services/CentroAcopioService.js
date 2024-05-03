import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL + "centroAcopio";
class CentroAcopioService {
  //Definición para Llamar al API y obtener el listado de películas
  //localhost:81/api/movie
  getCentrosAcopio() {
    return axios.get(BASE_URL);
  }
  //localhost:81/api/movie/2
  getCentroAcopioById(CentroAcopioId) {
    return axios.get(BASE_URL + "/" + CentroAcopioId);
  }
}
export default new CentroAcopioService();
