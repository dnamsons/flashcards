import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { styles } from '../common'

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
)

export default LoadingScreen
