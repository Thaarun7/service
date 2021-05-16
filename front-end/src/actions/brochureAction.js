import axios from 'axios';
import {
	BROCHURE_LIST_REQUEST,
	BROCHURE_LIST_SUCCESS,
	BROCHURE_LIST_FAIL,
} from '../constants/brochureConstants';

export const listBrochures = () => async (dispatch) => {
	try {
		dispatch({ type: BROCHURE_LIST_REQUEST });
		const { data } = await axios.get('/api/brochures');

		dispatch({
			type: BROCHURE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BROCHURE_LIST_FAIL,
			payload:error.message,
		});
	}
};
