import axios from 'axios';

const baseUrl = axios.create({
  baseURL: "http://localhost:4000"
})

export const cadastroUsuario = async (user) => {
  try {
      const response = await baseUrl.post("/users", user)
      return response.data
  } catch (error) {
      alert("Error:"+ error.response.data)
  }
}