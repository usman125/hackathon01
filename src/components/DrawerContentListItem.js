import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import { connect } from 'react-redux';

class ListItem extends Component {

	onPress() {
	}

	logOut = () => {
	}

	render() {
		const { textStyle, textStyleActive } = styles;
		return (
			<TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
				<View style={styles.container}>
					<View style={styles.innerContainer}>
						<Text
							style={this.props.activeRoute === this.props.item.name ? textStyleActive : textStyle}
						>
							{this.props.item.name}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	innerContainer: {
		justifyContent: 'center',
		padding: 5
	},
	textStyle: {
		fontSize: 15,
		padding: 10
	},
	textStyleActive: {
		fontSize: 15,
		padding: 10,
		color: 'red'
	}

};

const mapStateToProps = (state) => {
	return {
		activeRoute: state.router.activeRoute,
	};
}

export default connect(mapStateToProps, {})(ListItem);