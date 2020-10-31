import { StyleSheet} from 'react-native'

import { Colors, Fonts } from '../../styles/base'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
    alignItems: "center"
  },
  titleContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: Colors.White,
    marginRight: 24
  },
  text: {
    color: Colors.White,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 56
  },
  whiteCard: {
    backgroundColor: Colors.White,
    width: '100%',
    minHeight: 102,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 32,
    marginBottom: 32
  },
  whiteCardText: {
    textAlign: 'center',
    marginTop: 8
  },
  touchCard: {
    position: 'relative',
    flex: 1,
    width: '100%',
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  imgCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    zIndex: 10,
  },
  touchCardContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
    zIndex: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32
  },
  touchCardTitle:{
    fontFamily: Fonts.DisplayBold.fontFamily,
    fontSize: 48,
    lineHeight: 57,
    color: Colors.White,
    textAlign: 'center'
  },
  touchCardText:{
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 42,
    color: Colors.White
  }
})