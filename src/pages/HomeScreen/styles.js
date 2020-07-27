import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000'
  },
  Title: {
    margin: 25,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    padding: 2,
  },
  Card: {
    marginTop: 5,
    backgroundColor: '#FFF',
    height: 60,
    width: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextCard: {
    color: '#970E3E',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  containerFooter: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  Icon: {
    margin: 10
  }
});
