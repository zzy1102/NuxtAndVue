import serveice, { request } from '../axios'
let serveiceAxios = serveice(process.env.PAY_BASE_URL) //如若有多个服务器地址

// console.log('serveice', serveiceAxios)

const demoApi = {
  getqueryById: (data) =>
    request({
      url: 'pro/project/ProjectPropertiesController/queryById',
      data,
      method: 'get',
    }),
  postQueryById: (data) =>
    request({
      url: 'pro/project/ProjectPropertiesController/queryById',
      data,
      method: 'post',
    }),
  serveiceQueryById: (data) =>
    serveiceAxios({
      url: 'pro/project/ProjectPropertiesController/queryById',
      data,
      method: 'post',
    }),
  putedit: (data) =>
    request({
      url: '/pro/tasksTree/projectTasks/edit',
      data,
      method: 'put',
    }),
}

export default demoApi
