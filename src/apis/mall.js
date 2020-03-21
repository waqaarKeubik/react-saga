import axios from 'axios'

export default {
  mall : {
    getList: () =>
      axios.get('malls').then(res => res.data),
  }
}
