const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

export const api = axios.create({
    baseURL: "https://positivity-hackathon.herokuapp.com/api",
    timeout: 3000,
    withCredentials: true
})