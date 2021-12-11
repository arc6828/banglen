import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

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
    justifyContent: 'space-around',
  },
  input: {
    width: '40%',
    margin: 12,
    padding: 10,
  },
  inputFooter: {
    width: '29%',
    margin: 12,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    margin: 12,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
