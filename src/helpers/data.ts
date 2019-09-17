// data处理函数
import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  // 处理body中的对象参数
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

// 处理响应的data，转化为json对象
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
