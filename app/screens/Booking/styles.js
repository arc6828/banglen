import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepView: {
    alignItems: 'center',
  },
  borderStep: {
    height: 2,
    backgroundColor: '#ee5e30',
    width: 200,
    position: 'absolute',
    top: 13,
    zIndex: 10
  },
  stepViewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 20
  },
  stepViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ee5e30',
    borderRadius: 15,
    marginBottom: 10
  },
  stepViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonStepLeft: {
    marginTop: 20,
    bottom: 10,
    left: 10,
    width: 80,
    height: 35,
    backgroundColor: '#ee5e30',
  },
  buttonStepRigth: {
    marginTop: 20,
    bottom: 10,
    right: 10,
    width: 80,
    height: 35,
    backgroundColor: '#ee5e30',
  },

  scrollView: {
    marginHorizontal: 20,
  },
});
