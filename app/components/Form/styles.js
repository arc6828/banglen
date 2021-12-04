import { StyleSheet } from 'react-native';
import * as Utils from '@utils';

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
  inputFooter: {
    width: '29%',
    margin: 12,
    padding: 10,
  },
  input: {
    width: '40%',
    margin: 12,
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
  submitTextTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  submitTextShow: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  submitViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitTextContent: {
    fontSize: 15,
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

  // contentServiceIcon: {
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // contentCartPromotion: {
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },
  // btnPromotion: {
  //   height: 25,
  //   borderRadius: 3,
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  // },
  // contentHiking: {
  //   marginTop: 20,
  //   marginLeft: 20,
  //   marginBottom: 10,
  // },
  // promotionBanner: {
  //   height: Utils.scaleWithPixel(100),
  //   width: '100%',
  //   marginTop: 10,
  // },
  // line: {
  //   height: 1,
  //   marginTop: 10,
  //   marginBottom: 15,
  // },
  // iconContent: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 36,
  //   height: 36,
  //   borderRadius: 18,
  // },
  // itemService: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flex: 1,
  //   paddingTop: 10,
  // },
  // promotionItem: {
  //   width: Utils.scaleWithPixel(200),
  //   height: Utils.scaleWithPixel(250),
  // },
  // tourItem: {
  //   width: Utils.scaleWithPixel(135),
  //   height: Utils.scaleWithPixel(160),
  // },
  // titleView: {
  //   paddingHorizontal: 20,
  //   paddingTop: 20,
  //   paddingBottom: 10,
  // },
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
});