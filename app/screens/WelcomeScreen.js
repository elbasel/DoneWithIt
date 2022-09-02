import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.background}
    > 

    </ImageBackground >
  )
}

const styles = StyleSheet.create({background: {
    flex: 1,
}})