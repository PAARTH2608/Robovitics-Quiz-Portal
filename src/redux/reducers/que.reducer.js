import { AuthTypes } from '../types';

const initialState = {
	loading: false,
	CET: '',
	TEA: '',
	SET: {},
};

const AuthReducer = (state = initialState, action) => {
	// console.log(action);
	switch (action.type) {
		case AuthTypes.QUESTION_SUCCESS:
			return {
				CET: action.data.CET,
				TEA: action.data.TEA,
				SET: action.data.SET,
			};
		case AuthTypes.QUESTION_ERROR:
			return {
				isLoggedIn: false,
				message: action.error.message,
			};
		case AuthTypes.QUESTION_REQUEST:
			return {
				...state,
				email: '',
				showLanding: false,
				isLoggedIn: false,
			};
		default:
			return state;
	}
};

export default AuthReducer;
