import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const CardImageButton = ({ children, imagePath, onPress }) => {
	const { buttonStyle, thumbnailStyle } = styles;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={buttonStyle}
		>
			<Image
				style={thumbnailStyle}
				source={imagePath}
			/>
			<Text>{children}</Text>
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
};

export { CardImageButton };
