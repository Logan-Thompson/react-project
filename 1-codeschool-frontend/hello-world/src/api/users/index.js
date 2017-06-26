import 'whatwg-fetch';
import receiveStatus from '../receiveStatus';

export default class usersApi {
  static loginUserPromise(user) {
    return fetch('/items', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => receiveStatus(res))
        .then(res => res.json())
      .catch(err => receiveStatus(err));
  }
}
