import api from "./api"

const fetcher = (url: string) => api(url).then(res => res.data)

export default fetcher