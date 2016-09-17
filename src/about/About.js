import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup
} from 'react-native-elements'

import * as RNElements from 'react-native-elements'

let styles = {}

const users = [
  {
    name: 'Eggs',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Bannana',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Orange',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Apple',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Milk',
    avatar: 'http://lorempixel.com/128/128/food/'
  }
]

class About extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render () {
    const buttons = ['Button1', 'Button2']
    const { selectedIndex } = this.state
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>This App is made with love at HackZurich.</Text>
        </View>

        <View style={[styles.social,{ justifyContent: 'space-around'}]}>
          <Card
            title='SOCIAL NETWORKS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>

            </View>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>
              <SocialIcon
                raised={false}
                type='facebook'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                type='twitter'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                type='instagram'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                raised={false}
                type='youtube'
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default About
