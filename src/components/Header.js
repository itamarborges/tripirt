import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};

const styles = {
	viewStyle: {
		backgroundColor: '#009688',
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: 60,
		paddingTop: 15,
		paddingLeft: 20,
		position: 'relative'

	},
	textStyle: {
		fontSize: 20,
		color: '#ffffff'
	}
};

export default Header;
