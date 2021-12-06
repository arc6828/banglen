import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';
import * as Utils from '@utils';

export default StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    marginTop:-150
  },
   wrapper: {
    width: '100%',
    height: 350,
  },
  contentPage: {
    bottom: 0,
  },
  contentActionBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  img: {
    width: Utils.scaleWithPixel(200),
    height: Utils.scaleWithPixel(200),
    borderRadius: Utils.scaleWithPixel(200) / 2,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textSlide: {
    marginTop: 30,
  },
});
