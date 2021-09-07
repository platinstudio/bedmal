import { StyleSheet } from 'react-native';
let _defz = require('../../com/def');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  b1: {
    borderRadius: 30,
    marginRight: '-50%',
    height: 30,
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  b2: {
    backgroundColor: '#3D80F2',
    borderRadius: 30,
    elevation: 3,
    height: 30,
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    height: 50,
    marginLeft: 'auto',
    width: '100%',
    fontFamily: 'FuturaPT-Book',
  },
  text_card: { color: 'gray' },
  card: {
    borderRadius: 50,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: _defz.height / 100,
    height: 40,
    backgroundColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },
  icon: {
    color: 'black',
    width: 30,
    height: 30,
    marginRight: '2%',
    marginTop: '2%',
    backgroundColor: 'white',
  },
  text1: {
    color: 'gray',
    fontSize: 15,
    alignSelf: 'center',

    textTransform: 'capitalize',
    bottom: 5,
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  notUserChatBox: {
    backgroundColor: '#FAFAFA',
    width: '80%',
    marginTop: '3%',
    marginLeft: '5%',
    padding: _defz.height / 60,
    elevation: 5,
    borderRadius: 10,
    position: 'relative',
  },
  userChatBox: {
    backgroundColor: '#D8FFAA',
    width: '80%',
    marginTop: '3%',
    marginRight: '3%',
    marginLeft: 'auto',
    padding: _defz.height / 60,
    elevation: 5,
    position: 'relative',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  cahtBoxDateTime: {
    position: 'absolute',
    right: 0,
    bottom: -5,
    fontSize: 12,
    color: '#C3BCBC',
    fontFamily: 'FuturaPT-Book',
  },
  chatText: {
    color: '#707070',
    fontFamily: 'FuturaPT-Book',
    fontSize: 18,
  },
  createdAt: {
    textAlign: 'center',
    marginTop: '3%',
    color: '#C3BCBC',
    fontFamily: 'FuturaPT-Medium',
    fontSize: 14,
  },
  headerXButton: {
    alignSelf: 'flex-end',
    marginTop: _defz.height / 100,
    marginLeft: 'auto',
    marginRight: '3%',
  },
  headerBackButton: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 35,
    margin: 5,
  },
  heading: {
    backgroundColor: '#FFFFFF',
    marginTop: '3%',
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  headingImg: {
    marginLeft: '10%',
    marginTop: '1%',
  },
  footerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FAFAFA',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  footer: {
    backgroundColor: '#FAFAFA',
    height: 80,
  },
  footerTab: {
    backgroundColor: '#FAFAFA',
    alignSelf: 'flex-start',
  },
  footerBody: {
    width: '80%',
    flex: 6,
    alignSelf: 'center',
  },
  headingVendorName: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 20,
    color: '#020202',
  },
  headingVendorInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vendorResponse: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    color: '#C3BCBC',
  },
  headingButton: {
    backgroundColor: '#3D80F2',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 20,
    marginBottom: 4,
  },
  headingButtonText: {
    color: '#fff',
    fontFamily: 'FuturaPT-Medium',
    fontSize: 14,
  },
  info: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    color: '#707070',
    marginVertical: 4,
    marginLeft: 20,
  },
});
