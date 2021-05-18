import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { brochureListReducer } from './reducers/brochureReducers';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
} from './reducers/userReducers';
import { detailReducer } from './reducers/detailReducers';

const reducer = combineReducers({
	brochureList: brochureListReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	detail: detailReducer,
	userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const serviceDetailFromStorage = localStorage.getItem('serviceDetail')
	? JSON.parse(localStorage.getItem('serviceDetail'))
	: {};

const initialState = {
	detail: {
		serviceDetail: serviceDetailFromStorage,
	},
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
