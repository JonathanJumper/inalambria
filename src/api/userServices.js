import requestWrapper from './requestWrapper'

function getUsers () {
  return requestWrapper({
    url:    '/users',
    method: 'GET'
  });
}

export default {getUsers};