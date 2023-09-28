import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.StyleOut}>
      <Image source={require('../assets/logo2.png')} style={styles.Logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Logo: {
        width: 300,
        height: 100,
    },
    StyleOut: {
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});
