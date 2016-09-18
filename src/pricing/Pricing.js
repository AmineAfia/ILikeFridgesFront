import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as firebase from 'firebase'
let styles

import {
  List,
  ListItem,
  Text,
  SearchBar
} from 'react-native-elements'

const log = () => console.log('this is an example method')

const list1 = [{}]

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO'
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer'
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO'
  }
]
class Contact extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(list1),
      items: []
    }
    this.renderRow = this.renderRow.bind(this)
    
  }

  componentWillMount() {
    firebase.database().ref('items').once('value').then((snapshot) => {
            const items = snapshot.val();
            console.log(items);
            this.setState({items});
          });
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    )
  }
  render () {
    return (
      <ScrollView style={styles.mainContainer}>

        <List>
          <ListView
            enableEmptySections
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
            />
        </List>
        <List containerStyle={{marginBottom: 20}}>
        {
          this.state.items.map((l, i) => (
            <ListItem
              key={i}
              onPress={log}
              title={l.description}
              subtitle={JSON.stringify(l.amount)}
            />
          ))
        }
        </List>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  container: {
    marginTop: 60
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#69DDFF'
  }
})

export default Contact
