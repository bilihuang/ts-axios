import { AxiosTransformer } from './../types'

// 处理转化函数
export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data
  }
  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    // 把处理后的data作为下次的参数，管道化处理
    data = fn(data, headers)
  })
  return data
}
