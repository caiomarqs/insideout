import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center"
  },
  scrollViewContainer: {
    flex: 1
  },
  slide: {
    height: '100%',
    width: Dimensions.get('window').width,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    maxWidth: 283,
    marginTop: 16,
    marginBottom: 64
  },
  space: {
    flex: 1
  },
  button: {
    marginVertical: 40,
    maxWidth: 179
  }
})