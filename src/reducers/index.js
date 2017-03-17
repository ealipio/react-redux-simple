import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './itemsReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});