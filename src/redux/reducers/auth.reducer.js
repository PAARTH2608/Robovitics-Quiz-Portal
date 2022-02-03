import { AuthTypes } from '../types';

const initialState = {
	loading: false,
	email: '',
	name: '',
	id: '',
	registrationNumber: '',
	testStarted: false,
	QuestionSet: '',
	slot: {
		id: '',
		code: '',
		timing: '',
		isActive: false,
	},
	showLanding: false,
	validCredentials: false,
	isLoggedIn: false,
	hasUploaded: false,
	hasCompleted: false,
	message: '',
	testEndAt: '',
	error: false,
	currentTime: '',
};

const AuthReducer = (state = initialState, action) => {
	// console.log(action.data, 'lkj');
	switch (action.type) {
		case AuthTypes.LOGIN_SUCCESS:
			return {
				email: action.data.details.email,
				name: action.data.details.name,
				id: action.data.details._id,
				showLanding: !state.showLanding,
				registrationNumber: action.data.details.registrationNumber,
				testStarted: action.data.details.testStarted,
				QuestionSet: action.data.details.QuestionSet,
				slot: {
					id: action.data.details.slot._id,
					code: action.data.details.slot.code,
					timing: action.data.details.slot.timing,
					isActive: action.data.details.slot.isActive,
				},
				isLoggedIn: true,
				hasUploaded: action.data.details.hasUploaded,
				hasCompleted: action.data.details.hasCompleted,
				message: '',
				testEndAt: action.data.details.testEndAt,
				error: false,
				currentTime: action.data.currentTime,
				isActive: true,
			};
		case AuthTypes.LOGIN_ERROR:
			return {
				isLoggedIn: false,
				message: action.error.message,
				hasUploaded: false,
				hasCompleted: false,
				error: true,
			};
		case AuthTypes.LOGOUT_REQUEST:
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
