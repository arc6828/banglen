import { StyleSheet } from 'react-native';
import * as Utils from '@utils';

export default StyleSheet.create({
  imageBackground: {
    height: 140,
    width: '100%',
    position: 'absolute',
  },
  searchForm: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  contentServiceIcon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentCartPromotion: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnPromotion: {
    height: 25,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  line: {
    height: 1,
    marginTop: 10,
    marginBottom: 15,
  },
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  itemService: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
  },
  promotionItem: {
    borderWidth: 1,
    alignItems: 'center',
    width: Utils.scaleWithPixel(200),
    height: Utils.scaleWithPixel(250),
  },
  lineChart: {
    width: Utils.scaleWithPixel(150),
    height: Utils.scaleWithPixel(50),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  watherCard: {
    width: Utils.scaleWithPixel(600),
    height: Utils.scaleWithPixel(85),
    margin: 5,
    borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  thumb: {
    width: 90,
    height: 90,
    borderRadius: 20,
    margin: 5
  },
});
