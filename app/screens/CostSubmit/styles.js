
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  submitTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  submitTextShow: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  submitViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitTextContent: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 8,
    margin: 12,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contain: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  contentLeft: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  contentRight: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchForm: {
    padding: 10,
    borderWidth: 0.5,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  separator: {
    marginVertical: 8,
    margin: 0.5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});