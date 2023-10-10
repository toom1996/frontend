import axios from "axios";
// import qs from "qs";


const service = axios.create({
    timeout:30000,
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {

    }
})
service.interceptors.request.use(
    (config) => {
        config.url = `${config.url}`
        console.log(config)
        return config
    },
    (error) => {
        console.log(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
    }
)

export function get(url: string, params = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params: params
        }).then(response => {
            // resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url: string, params = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service.postForm(url, params).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}