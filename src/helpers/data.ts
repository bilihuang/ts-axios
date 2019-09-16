import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  // 处理body中的对象参数
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
