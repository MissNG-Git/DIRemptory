import axios from "axios";

const API = {
  getRandomEmployees: () => {
    // fetch only 50 employees w/AU nationality
    return axios.get("https://randomuser.me/api/?results=50&nat=au");
  },
};

export default API;
