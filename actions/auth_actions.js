import { AsyncStorage } from 'react-native';

import  {
	FACEBOOK_LOGIN_SUCCESS
} from './types';

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token'); 
	if (token) {
		// Dispatch action 
	} else {
		// Start FB Login
	}
};