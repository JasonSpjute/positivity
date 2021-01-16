const base = window.location.host.includes('localhost') ? '//localhost:3000/api' : 'https://positivity-hackathon.herokuapp.com/api'

export const api = axios.create({
    baseURL: base,
    timeout: 3000,
    withCredentials: true
})