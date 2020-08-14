import {combineReducers} from 'redux';
import UserReducers from '../redux/Reducers/userReducers'
import AdminReducer from './Reducers/AdminReducer';

const rootReducers = combineReducers({
    user: UserReducers,
    admin: AdminReducer

    
});
export default rootReducers;