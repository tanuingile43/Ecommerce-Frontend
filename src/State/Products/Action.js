import {api} from '../../Config/apiConfig.js'

import {GET_ALL_PRODUCTS_FAILURE,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS_REQUEST, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE} from './ActionTypes'

export const findProducts = () => async (dispatch) =>{
    dispatch({type:GET_ALL_PRODUCTS_REQUEST})
    try {
        const {data} = await api.get('/api/products');

        dispatch({type:GET_ALL_PRODUCTS_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:GET_ALL_PRODUCTS_FAILURE, payload: error.message})
    }
}

export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })

    const { productId } = reqData;


    try {

        const { data } = await api.get(`/api/products/id/${productId}`)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }

}