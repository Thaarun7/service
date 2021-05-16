import {
	BROCHURE_LIST_REQUEST,
	BROCHURE_LIST_SUCCESS,
	BROCHURE_LIST_FAIL,
} from '../constants/brochureConstants';

export const brochureListReducer = (state = { brochures: [] }, action) => {
	switch (action.type) {
		case BROCHURE_LIST_REQUEST:
			return { loading: true, brochures: [] };
		case BROCHURE_LIST_SUCCESS:
			return {
				loading: false,
				brochures: action.payload,
			};
		case BROCHURE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
