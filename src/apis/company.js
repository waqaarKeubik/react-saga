import axios from 'axios'

export default {
  company : {
    add : data =>
      axios.post('companies', data).then(res => res.data),
    getList: () =>
      axios.get('http://jsonplaceholder.typicode.com/photos?_page=1&_limit=15').then(res => res.data),
  }
}
