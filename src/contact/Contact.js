import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox
} from 'react-native-elements'

let styles = {}

class Contact extends Component {
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headingContainer}>
          <Icon color='white' name='contact-mail' size={62} />
          <Text style={styles.heading}>Contact Form</Text>
        </View>
        <FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
        <FormInput placeholder='Please enter your name...' />
        <FormLabel containerStyle={styles.labelContainerStyle}>Address</FormLabel>
        <FormInput placeholder='Please enter your address...' />
        <FormLabel containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
        <FormInput placeholder='Please enter your phone number...' />
        <Button
          onPress={() => console.log('yo')}
          icon={{name: 'done'}}
          buttonStyle={{marginTop: 15}}
          title='SUBMIT' />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  headingContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  labelContainerStyle: {
    marginTop: 8
  }
})

export default Contact
