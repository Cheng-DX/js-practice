export type Axios = {
  get: (
    url: string,
    params?: object,
    options?: Options
  ) => Promise<LocalResponse>
  post: (url: string, data?: any, options?: Options) => Promise<LocalResponse>
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

export type Options = {
  timeout?: number
  header?: object
}
