import {client} from 'utils/api'

export function login(value) {
  return client('login', {
    method: 'POST',
    body: value,
  })
}
