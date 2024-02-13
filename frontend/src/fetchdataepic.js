// fetchDataEpic.js
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { fetchDataSuccess, fetchDataError } from './actions';
import { FETCH_DATA_REQUEST } from './actionTypes';

const fetchdataepic = action$ =>
  action$.pipe(
    ofType(FETCH_DATA_REQUEST),
    mergeMap(action =>
      // Perform an asynchronous operation (e.g., API call)
      fetch('/api/data')
        .then(response => response.json())
        .then(data => fetchDataSuccess(data))
        .catch(error => fetchDataError(error))
    )
  );

export default fetchdataepic;
