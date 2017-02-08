import 'rxjs';

const CounterEpic = action$ =>
  action$.ofType('INCREMENT')
    .delay(1000)
    .mapTo({ type: 'DECREMENT' });

export default CounterEpic;
