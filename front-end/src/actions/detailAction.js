import { SERVICE_DETAIL } from '../constants/detailConstants';

export const saveServiceDetail = (data) => (dispatch) => {
	dispatch({
		type: SERVICE_DETAIL,
		payload: data,
	});

	localStorage.setItem('serviceDetail', JSON.stringify(data));
};