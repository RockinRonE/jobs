import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native'; 

const store = createStore(
	// default reducers
	reducers,
	// default state
	{},
	compose(
		applyMiddleware(thunk),
		autoRehydrate()
	)

);

persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store; 