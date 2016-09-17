import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'
import * as RNElements from 'react-native-elements'

import Home from './home/HomeNav'
import Home2 from './home2/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state
    return (
      <TabNavigator>
        <TabNavigator.Item
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'SCANNER' : null}
          renderIcon={() =>
                <RNElements.Icon
                type='font-awesome'
                color={colors.grey2}
                name='barcode' />}
          renderSelectedIcon={() => 
                <RNElements.Icon
                type='font-awesome'
                color={colors.grey2}
                name='barcode' />}
          onPress={() => this.changeTab('home')}>
          <Home toggleSideMenu={toggleSideMenu} />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'pricing' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'pricing'}
          title={selectedTab === 'pricing' ? 'FRIDGE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='local-dining' size={30} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='local-dining' size={26} />}
          onPress={() => this.changeTab('pricing')}>
          <Pricing />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'contact' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'contact'}
          title={selectedTab === 'contact' ? 'CONTACT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={30} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
          onPress={() => this.changeTab('contact')}>
          <Contact />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'about' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'about'}
          title={selectedTab === 'about' ? 'ABOUT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='info-outline' size={30} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='info-outline' size={26} />}
          onPress={() => this.changeTab('about')}>
          <About />
        </TabNavigator.Item>
      </TabNavigator>

    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
