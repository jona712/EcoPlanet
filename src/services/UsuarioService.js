import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL + "usuario";
class UsuarioService {
  //Definición para Llamar al API y obtener el listado de películas
  //localhost:81/api/movie
  getUsuarios() {
    return axios.get(BASE_URL);
  }
  //localhost:81/api/movie/2
  getUsuarioById(UsuarioId) {
    return axios.get(BASE_URL + "/" + UsuarioId);
  }
}
export default new UsuarioService();