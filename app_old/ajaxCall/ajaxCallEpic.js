import 'rxjs';

import { ajax } from 'rxjs/observable/dom/ajax';
import { webSocket } from 'rxjs/observable/dom/webSocket';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';


const socket = new WebSocketSubject('ws://localhost:7001');

const fetchData = function(payload) {
  console.log(payload);
  return ({ type: 'HAS_DATA', 'users': payload});
}



const WebSocketEpic = (action$, store) =>
  action$.ofType('GET_DATA')
    .mergeMap(action =>
      socket.multiplex(
        () => ({ sub: action.user }),
        () => ({ unsub: action.user}),
        msg => msg.user === action.user
      )
      .map(user => fetchData(user))
    );

export default WebSocketEpic;
