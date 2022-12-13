import api from "./api"

const fetcher = (...args) => api(...args).then(res => res.data)

export default fetcher