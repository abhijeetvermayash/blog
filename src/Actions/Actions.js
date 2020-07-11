import jsonplaceholder from '../Apis/jsonplaceholder'
import _ from 'lodash';

export const fetchDataAndUser = () => {
    return async (dispatch,getstate) => {
        console.log("fafafa");
        await dispatch(fetchData());
        const userIds = _.uniq(_.map(getstate().posts, 'userId'))
        console.log(userIds);
        userIds.forEach((id) => dispatch(fetchUser(id)));
        console.log("dadadad");
    }
}

export const fetchData =  () => {
    console.log("action");
    return async  (dispatch) => {


        const response = await jsonplaceholder.get('/posts');
        dispatch({ type: "FETCH_DATA", payload: response.data });
    }
}

export const fetchUser = (id) => {
    console.log("action2");
    return async (dispatch) => {
        //_fetchUser(id, dispatch);


        const response = await jsonplaceholder.get(`/users/${id}`);
        dispatch({ type: "FETCH_USER", payload: response.data });
    }
}

//const _fetchUser = _.memoize(async (id, dispatch) => {
  //    const response = await jsonplaceholder.get(`/users/${id}`);
    //  dispatch({ type: "FETCH_USER", payload: response.data });
//});