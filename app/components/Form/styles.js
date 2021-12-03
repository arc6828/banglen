import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewFooter: {
    flexDirection: 'row',
  },
  inputFooter: {
    width: '26%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    width: '40%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    margin: 12,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  submitViewTitle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitTextTitle:{
    fontSize:20,
  },
  submitViewContent:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitTextContent:{
    fontSize:15,
  }

});