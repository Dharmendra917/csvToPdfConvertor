import axios from "axios";

const instance = axios.create({
  baseURL: "https://csvapi-7qyv.onrender.com/api/",
  withCredentials: true,
});

export default instance;
