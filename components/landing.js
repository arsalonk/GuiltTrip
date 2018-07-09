import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { inputNumber } from '../actions'
import Input from './input';
import Message from './message'

function Landing(props) {
  if (!props.message) {
    return (
      <View style={styles.container}>
        <Input />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Message />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  number: state.number,
  message: state.message
})

export default connect(mapStateToProps)(Landing)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});