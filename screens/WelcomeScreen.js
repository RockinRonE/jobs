import React, { Component } from 'react';
import { AppLoading } from 'expo'; 
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#03a9f4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your location, then swipe away', color: '#03a9f4'  }
];

class WelcomeScreen extends Component {
	state = { token: null }

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token'); 
		if(token) {
			this.setState({ token });
			this.props.navigation.navigate('map');
		} else {
			this.setState({ token: false });
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	render() {
		if(this.state.token === null) {
			return <AppLoading />;
		}
		return (
			<Slides
				data={SLIDE_DATA}
				onComplete={this.onSlidesComplete}
			/>
		);
	}
}

export default WelcomeScreen;  