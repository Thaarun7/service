import { SERVICE_DETAIL } from '../constants/detailConstants';

export const detailReducer = (state = { serviceDetail: {} }, action) => {
	switch (action.type) {
		case SERVICE_DETAIL:
			return {
				...state,
				serviceDetail: action.payload,
			};
		default:
			return state;
	}
};
