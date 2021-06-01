// import { HOST } from '../config/constant'
// // 是否正在显示message
// let isMessage = false

// interface transformFetchParams {
//     method: string;
//     router: string;
//     parameter?: any;
// }

// export const transformFetch = (params: transformFetchParams = { method: '', router: '', parameter: {} }) => {
//     const { method, router, parameter } = params;
//     const jsonParameter = JSON.stringify(parameter)
//     const headers = new Headers({
//         "Content-Type": "application/json"
//     })
//     const request: any = { method, headers }
//     method !== 'GET' && (request.body = jsonParameter)
//     return Promise.race([
//         new Promise((resolve, reject) => {
//             setTimeout(() => resolve({ error: 408, msg: '客户端请求超时' }), 50000)
//         }),
//         new Promise(async (resolve, reject) => {
//             const result = await fetch(parameterTransform(method, router, parameter), request)
//             const response = JSON.parse(await result.text())
//             resolve(response)
//         })
//     ])
// }

// const parameterTransform = (method: string, router: string, parameter: any) => {
//     if (method !== 'GET') {
//         return HOST + router
//     }
//     let parameterString = HOST + router + '?'
//     for (const param in parameter) {
//         if (parameter.hasOwnProperty(param)) {
//             parameterString += param + '=' + parameter[param] + '&'
//         }
//     }
//     return parameterString.slice(0, -1)
// }

// export const generateId = () => {
//     return Math.random().toString(36).substring(2) + (new Date().getTime().toString(36))
// }

// export const message = (params: { innerText: string }) => {
//     if (isMessage) {
//         return
//     }
//     const { innerText } = params;
//     isMessage = true
//     const element: any = document.getElementById('message')
//     element.innerText = innerText
//     const dom: any = document.getElementById('header');
//     const clientWidth = dom.clientWidth
//     const elementWidth = element.clientWidth
//     const left = (clientWidth - elementWidth) / 2
//     element.style.left = `${left}px`
//     element.className = 'message-start'
//     const timer = setTimeout(() => {
//         element.className = 'message-end'
//         const afterTimer = setTimeout(() => {
//             element.className = 'message-after'
//             isMessage = false
//             clearTimeout(afterTimer)
//         }, 2000)
//         clearTimeout(timer)
//     }, 3000)
// }
