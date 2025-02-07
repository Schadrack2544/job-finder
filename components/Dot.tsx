import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dot = () => {
  return (
    <View style={styles.dot}/>
  )
}

export default Dot

const styles = StyleSheet.create({
    dot: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
      backgroundColor: '#807D7DFF',
      marginHorizontal: 2.5,
    }
})