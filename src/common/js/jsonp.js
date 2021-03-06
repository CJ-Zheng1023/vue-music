import originalJsonp from 'jsonp'

export default function(url, data, option) {
  url += (url.includes('?') ? '&' : '?') + generateParams(data)
  console.log(url)
  return new Promise((resolve, reject) => {
    originalJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function generateParams(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] === undefined ? '' : data[k]
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
