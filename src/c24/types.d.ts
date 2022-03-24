export type Axios = {
  get: (url: string, params?: object) => Promise<any>
  post: (url: string, data: any) => Promise<any>
}
export type AxiosConfig = {
  base: string
  beforeRequest?: Function
  afterResponse?: Function
}
export interface LocalResponse {
  status: number
  statusText: string
  data: any
  headers: any
}
