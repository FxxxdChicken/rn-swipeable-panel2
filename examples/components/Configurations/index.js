import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export const Configurations = ({ state, changeState }) => {
	return (
		<React.Fragment>
			<View
				style={[
					Styles.configurationItem,
					{ justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' }
				]}
			>
				<Text style={[ Styles.title, { fontWeight: 'bold' } ]}>Configurations</Text>
			</View>
			<View style={Styles.configurationItem}>
				<Text>Is Open</Text>
				<Switch value={state.isOpen} disabled />
			</View>
			<View style={Styles.configurationItem}>
				<Text>Full Width</Text>
				<Switch
					value={state.fullWidth}
					onValueChange={(value) => changeState({ ...state, fullWidth: value })}
				/>
			</View>
			<View style={Styles.configurationItem}>
				<Text>Close Button</Text>
				<Switch
					value={state.closeButton}
					onValueChange={(value) => changeState({ ...state, closeButton: value })}
				/>
			</View>
			<View style={Styles.configurationItem}>
				<Text>No Background Opacity</Text>
				<Switch
					value={state.noBackgroundOpacity}
					onValueChange={(value) => changeState({ ...state, noBackgroundOpacity: value })}
				/>
			</View>
		</React.Fragment>
	);
};

export const Styles = StyleSheet.create({
	configurationItem: {
		width: '100%',
		marginBottom: 10,
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff'
	}
});
