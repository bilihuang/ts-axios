import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

// 创建新的实例并合成混合对象
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
