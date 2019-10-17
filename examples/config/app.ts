import axios from '../../src/index'
import qs from 'qs'

axios.defaults.headers.common['test2'] = 1234

axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '321'
  }
}).then(res => {
  console.log(res.data)
})