import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8091", //Spring Boot URL
});

export default API;