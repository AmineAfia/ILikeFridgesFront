/**
 * @providesModule HSNavTitleIcon
 *     <Image
      source={src}
      style={styles.logo} />
 */

import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

let styles = {}

const NavTitleIcon = ({src}) => (
  <View>
  <Text style={styles.heading} h2>Frigometre</Text>
  </View>
)

styles = StyleSheet.create({
  container: {
  },
  logo: {
    width: 160,
    height: 32
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default NavTitleIcon
