import axios from 'axios';
import { toast } from 'react-toastify'

export const baseUrl = axios.create({
  baseURL: "http://localhost:4000",
  // headers: "Content-Type: application/json"
})

export const cadastroUsuario = async (name, email, password, apartament) => {
  try {
      const response = await baseUrl.post("/users", { name, email, password, apartament })
      return response.data;
  } catch (error) {
      toast.warn("Error:"+ error.response.data)
  }
}

export const listarUsuarios = async () => {
  try {
      return await baseUrl.get("/users:id")
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}

export const loginUsuario = async (email, password) => {
  try {
      const response = await baseUrl.post("/login", { email, password })
      return response.data;
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}

export const publicarPost = async (content) => {
  try {
      const response = await baseUrl.post("/posts", { content })
      return response.data;
  } catch (error){
    toast.warn("Error:"+ error.response.data)
  }
}

export const getPosts = async () => {
  try {
    return await baseUrl.get("/posts")
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}

export const getUserPost = async (id) => {
  try {
    return await baseUrl.get("/userposts/"+id)
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}

export const getUser = async (id) => {
  try {
    return await baseUrl.get("/users/"+id)
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}

export const updateUser = async (id, name, email, password, apartament) => {
  try {
      const response = await baseUrl.put("/users/"+id, { name, email, password, apartament })
      return response.data;
  } catch (error) {
    toast.warn("Error:"+ error.response.data)
  }
}