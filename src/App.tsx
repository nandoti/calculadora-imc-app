import React from 'react'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { useFonts } from 'expo-font'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

import { DataImcProvider } from './context/DataImcContext'
import colors from './styles/colors'
import { HomeScreen } from './screens/HomeScreen'
import { loadFonts } from './assets/fonts'
import { nativeBaseTheme } from './theme'

export default function App () {
  const [fontsLoaded] = useFonts(loadFonts())

  if(!fontsLoaded) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <DataImcProvider>
          <StatusBar backgroundColor={colors.blackColor} barStyle="light-content"/>
          <HomeScreen />
        </DataImcProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}