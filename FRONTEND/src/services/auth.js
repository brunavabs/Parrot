import axios from 'axios';

const baseUrl = axios.create({
  baseURL: "http://localhost:4000",
  headers: "Content-Type: application/json"
})

export const cadastroUsuario = async (name, email, password, apartament) => {
  try {
      const response = await baseUrl.post("/users", { name, email, password, apartament })
      return response.data;
  } catch (error) {
      alert("Error:"+ error.response.data)
  }
}