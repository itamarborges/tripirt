import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Images from './../../Images';


const MenuImageButton = (props) => {

	const { imagePath, title } = props;
	const { textStyle, buttonStyle, thumbnailStyle } = styles;

	return (
		<TouchableOpacity style={buttonStyle} >
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
		color: '#000',
		color: '#4d4d4d'
	},
	thumbnailStyle: {
		height: 110,
		width: 110
	},
};

export { MenuImageButton };