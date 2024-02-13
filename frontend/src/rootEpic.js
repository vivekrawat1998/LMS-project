// rootEpic.js
import { combineEpics } from 'redux-observable';
import getProductEpic from './getProductEpic'; // Import your epic

const rootEpic = combineEpics(getProductEpic);

export default rootEpic;
