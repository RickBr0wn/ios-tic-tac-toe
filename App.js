/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function App(params) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>
          App
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
