import { StyleSheet } from 'react-native';

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
  pageTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
  },
  logo: {
    display: 'flex',
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginVertical: 28,
  },
  card: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardBox: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardTitle: {
    width: 280,
    height: 100,
    borderRadius: 10,
    marginLeft: 40,
  },
  cardImg: {
    width: 40,
    height: 40,
  },
  scrollView: {
    height: 100,
    marginHorizontal: 20,
    marginTop: 20,
    flexGrow: 0,
  },
  root: {
    backgroundColor: '#B6B6B6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
