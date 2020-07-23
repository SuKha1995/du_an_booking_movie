import {combineReducers} from 'redux';
import UserReducers from '../redux/Reducers/userReducers'

const rootReducers = combineReducers({
    user: UserReducers

    
});
export default rootReducers;