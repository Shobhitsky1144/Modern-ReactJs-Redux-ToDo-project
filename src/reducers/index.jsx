import changeTheNumber from './upDown';
import multTheNumber from './mulDiv';
import {combineReducers} from 'redux';

const rootReducers=combineReducers({
    changeTheNumber,
    multTheNumber

})
export default rootReducers;