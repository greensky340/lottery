
// fetch(url, {
//   method: 'POST',
//   header: {
//     'Content-type': 'application/json'
//   },
//   // body: JSON.stringify({ username: 'user1', password: 'pwd1' })
//   body: JSON.stringify(json)
// })
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (json) {
//     console.log('myJson:', json)
//     return json
//   })
import axios from 'axios'
export function postData (url, json) {
  return axios.post(url, JSON.stringify(json)).then(res => {
    // console.log(res.data)
    return res.data
  }).catch(err => {
    console.log(err)
  })
}
