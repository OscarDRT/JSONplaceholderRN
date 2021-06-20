import axios from 'axios'
import * as AxiosLogger from 'axios-logger'

export const placeholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

placeholderApi.defaults.headers.Accept = 'application/json'
placeholderApi.defaults.headers['Content-type'] = 'application/json'

if (false) {
  placeholderApi.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)

  placeholderApi.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger)
}
