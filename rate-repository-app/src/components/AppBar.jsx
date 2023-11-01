import { View, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
})

const AppBarTab = ({ children }) => {
  return (
    <View style={styles.tabContainer}>
      <Text fontWeight="bold" style={styles.tabText}>
        {children}
      </Text>
    </View>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab>Repositories</AppBarTab>
        <AppBarTab>GitHub</AppBarTab>
        <AppBarTab>Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
