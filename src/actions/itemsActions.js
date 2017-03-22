import types from './actionTypes';

//export default sumalo = (n) => {n+1};

export function itemsHasErrored(bool){
    return {type:types.ITEMS_HAS_ERRORED,hasErrored: bool};
}

export function itemsIsLoading(bool){
    return {type: types.ITEMS_IS_LOADING,isLoading: bool};
}

export function itemsFetchDataSuccess(items){
    return {type: types.ITEMS_FETCH_DATA_SUCCESS,items}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function errorAfterFiveSeconds(){
    console.log("errorAfterFiveSeconds");
    // we return a new function instead of an action object
    return dispatch => {
        setTimeout(
            () => {
                // this function is able to dispatch other action creators
                console.log("in setTimeout");
                dispatch(itemsHasErrored(true));
            }, 3000
        );
    }
}
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}