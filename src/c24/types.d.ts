export type Axios = {
  get: (url: string, params?: object) => Promise<LocalResponse>
  post: (url: string, data: any) => Promise<LocalResponse>
}
export type AxiosConfig = {
  base: string
  beforeRequest?: Function
  afterResponse?: Function
}
export type LocalResponse = {
  status: number
  statusText: string
  data: any
  headers: any
}
