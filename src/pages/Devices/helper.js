import {client} from 'utils/api'

export function fetchDevice() {
  return client('devices')
}

export function notify(value) {
    return client('users', {
      method: 'POST',
      body: value,
    })
  }
  