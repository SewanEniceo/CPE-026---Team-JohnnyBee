import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.start}>Hello! Hoping to wake you up soon!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    start: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 7,
    }
})