import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const MenuImageButton = ({ imagePath, title, onPress }) => {
	const { textStyle, buttonStyle, thumbnailStyle } = styles;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={buttonStyle}
		>
			<Image
				style={thumbnailStyle}
				source={imagePath}
			/>
			<Text style={textStyle}>
				{title}
			</Text>
		</TouchableOpacity>
		);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 60
	},
	textStyle: {
		paddingTop: 15,
		fontSize: 20,
		color: '#4d4d4d'
	},
	thumbnailStyle: {
		height: 110,
		width: 110
	},
};

export { MenuImageButton };
