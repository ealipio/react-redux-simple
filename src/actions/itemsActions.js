import types from './actionTypes';

function itemsHasErrored(bool){
    return {
        type:types.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

function itemsIsLoading(bool){
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

function itemsFetchDataSuccess(items){
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items
}

function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export default {itemsHasErrored, ite,itemsIsLoading, itemsFetchDataSuccess, itemsFetchData};