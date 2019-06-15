import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTest } from './actions';

class List extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>List of items in state:</Text>
				{this.props.someArray && this.props.someArray.map(function (item, index) {
					return <Text key={index}>{item}</Text>
				})}
				<Button title="Add Test" onPress={() => this.props.addTest(`test ${this.props.someArray.length + 1}`)}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
	return { someArray: state.listReducer.someArray };
}

function mapDispatchToProps(dispatch) {
  return {
    addTest: test => dispatch(addTest(test))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);