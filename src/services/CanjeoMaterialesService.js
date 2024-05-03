import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL + "canjeomateriales";
class CanjeoMaterialesService {

  //Usuario cliente
  getAllCanjeosMateriales(id) {
    return axios.get(BASE_URL + "/index/" + id);
  }

  getCanjeosMateriales(id) {
    return axios.get(BASE_URL + "/" + id);
  }

  //Usuario administrador
  getAllCanjeosMaterialesByAdmin(id) {
    return axios.get(BASE_URL + "/getAdmin/" + id);
  }

}
export default new CanjeoMaterialesService();
