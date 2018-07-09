import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { inputNumber, displayMessage } from '../actions'

function Message(props) {
  let lives = props.number / .5
  return (
    <View>
      <Text>{lives} children in Africa could have been fed with the amount spent</Text>
      <Button
          onPress={() => props.dispatch(displayMessage(false))}
          title='Dang'
        />
    </View>
  )
}

const mapStateToProps = state => ({
  number: state.number,
  message: state.message
})

export default connect(mapStateToProps)(Message)
