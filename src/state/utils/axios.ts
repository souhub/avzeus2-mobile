import axios from "axios"

import { AI_BASE_URL } from "./env"

const aiAxios = axios.create({
  baseURL: AI_BASE_URL,
  headers: { "Content-Type": "application/json" },
})

export { aiAxios }
