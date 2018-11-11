import { combineReducers } from 'redux';
// Sets up alias for reducer, redux-form piece is just called "reducuer", this prevents conflict
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
