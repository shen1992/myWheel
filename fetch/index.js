/**
 * Created by shen on 2017/2/4.
 */

function encodeQuery(url, data = {}) {
  if (!data || !Object.keys(data).length) {
    return url;
  }

  url = url.indexOf('?') === -1 ? `${url}?` : `${url}&`;

  const query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');

  return `${url}${query}`;
}

function Fetch(url, options) {

  return fetch(url, {credentials: 'include', ...options})
    .then((res) => res.json())
    .then(json => json)
    .catch((e) => console.log('error', e))
}

function GET(url, data = {}, options = {}) {
  this.send = () => {
    const _url = encodeQuery(url, data);
    return Fetch(_url, {
      method: 'GET',
      ...options
    })
      .then((res) => res)
      .catch((err) => {throw err})
  }
}

function POST(url, data = {}, option = {}) {
  this.send = () => {
    return Fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: typeof data === 'object' ? JSON.stringify(data) : data,
      ...option
    })
      .then(res => res)
      .catch((err) => {throw err})
  }
}

function PUT(url, data = {}, options = {}) {
  return FETCH(url, {
    method: 'PUT',
    body: typeof data === 'object' ? JSON.stringify(data) : data,
    ...options,
  })
}

function DELETE(url, data = {}, options = {}) {
  return FETCH(url, {
    method: 'DELETE',
    body: typeof data === 'object' ? JSON.stringify(data) : data,
    ...options,
  })
}

export {
  GET,
  POST,
  PUT,
  DELETE,
}

