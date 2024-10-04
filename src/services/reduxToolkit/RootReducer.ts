import {combineReducers} from 'redux';
import users from './users/users';
import feed from './feed/feed';

const rootReducer = combineReducers({
  users: users,
  feed: feed,
});

export default rootReducer;
