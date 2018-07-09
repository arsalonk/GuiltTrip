import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { inputNumber, displayMessage } from '../actions'

function Input(props) {
    return (
      <View>
        <Text>How much spent?</Text>
        <TextInput
          keyboardType='numeric'
          onChangeText={text => props.dispatch(inputNumber(text))}
        />
        <Button
          onPress={() => props.dispatch(displayMessage(true))}
          title='Guilt'
        />
      </View>
    )
  }

const mapStateToProps = state => ({
  number: state.number
})

export default connect(mapStateToProps)(Input)