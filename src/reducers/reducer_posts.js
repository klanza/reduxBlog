import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    
      // **** ES5 Syntax ****
      // const post = action.payload.data
      // const newSTate = { ...state };
      // newState[post.id] = post
      // return newState

      // **** REFACTORED ****
      return { ...state, [action.aypload.data.id] : action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
