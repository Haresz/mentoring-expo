import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    fontSize: 14,
  },
  pageTitle:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
  },
  logo:{
    display: 'flex',
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginVertical: 28,
  },
})