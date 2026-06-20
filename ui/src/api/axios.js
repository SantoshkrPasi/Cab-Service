import axios from "axios";

const UserAPI = axios.create({
  baseURL: "http://localhost:8091/users", //Spring Boot URL
});

const AdminAPI = axios.create({
 baseURL: "http://localhost:8091/admin", //Spring Boot URL
});


export { UserAPI, AdminAPI };