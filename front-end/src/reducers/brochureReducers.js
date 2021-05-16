export const brochureListReducer = (state = { brochures: [] }, action) => {
	switch (action.type) {
		case 'BROCHURE_LIST_REQUEST':
			return { loading: true, brochures: [] };
		case 'BROCHURE_LIST_SUCCESS':
			return {
				loading: false,
				brochures: action.payload.brochures,
			};
		case 'BROCHURE_LIST_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
