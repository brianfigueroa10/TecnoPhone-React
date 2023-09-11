import axios from 'axios';
import { BASE_URL } from './constants';
import {
    createOrderFail,
    fetchOrdersFail,
    fetchOrdersStart,
    fetchOrdersSuccess,
} from '../redux/ordersSlice';

export const createOrder = async (order, dispatch, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`, order, {
            headers: {
                'x-token': currentUser.token,
            },
        });
        if (response) {
            getOrders(dispatch, currentUser);
        }
    } catch (error) {
        dispatch(createOrderFail());
    }
};

export const getOrders = async (dispatch, currentUser) => {
    dispatch(fetchOrdersStart());

    try {
        const response = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                'x-token': currentUser.token,
            },
            params: {
                userId: currentUser.id,
            },
        });
        if (response.data) {
            const orders = response.data;
            dispatch(fetchOrdersSuccess(orders));
        }
    } catch (error) {
        console.error({ error });
        dispatch(
            fetchOrdersFail('Oops, algo salío mal. No hay ordenes sin usuario.')
        );
    }
};

