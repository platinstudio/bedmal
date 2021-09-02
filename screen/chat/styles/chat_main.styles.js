import {StyleSheet} from 'react-native';
let _defz = require('../../com/def');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  cartItem: {
    borderBottomColor: '#F0F0F0',
    marginTop: 15,
    paddingBottom: 10,
    width: _defz.width,
    left:"-15%",
    color: 'white',
    backgroundColor: 'white'
  },
  b1: {
    width: _defz.width / 5,
    textTransform: 'capitalize',
    justifyContent: 'center',
    marginLeft: '5%',
    marginTop: '5%',
  },
  b2: {
    backgroundColor: '#3D80F2',
    borderRadius: 30,
    elevation: 3,
    height: 30,
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  text_card: {color: 'gray'},
  card: {
    borderRadius: 9,
    width: '90%',
    alignSelf: 'center',
    marginTop: _defz.height / 60,
    elevation: 5,
    height: _defz.height / 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
    fontSize: 14,
marginRight: "5%",
    textTransform: 'capitalize',
  },
  chatAvatar: {
    elevation: 0,
    marginTop: _defz.height / 60,
  },
  avatarBadge: {
    width: _defz.width / 50,
    height: _defz.width / 50,
    marginTop: '10%',
    marginRight: '10%',
    color: '#E03174',
    elevation: 5,
    margin:5

  
  },
  avatarBadge2: {
    width: _defz.width / 50,
    height: _defz.width / 50,
    marginTop: '10%',
    marginRight: '10%',
    color: 'white',
    elevation: 5,
  },
  avatarBadge_non: {
    width: _defz.width / 50,
    height: _defz.width / 50,
    marginTop: '20%',
    marginRight: '10%',
    color: 'white',
  },
  chatInfo: {
    elevation: 0,
    marginTop: _defz.height / 60,
  },
  headerBackButto: {
    alignSelf: 'flex-end',
    marginTop: _defz.height / 50,
  },
  alertIcon: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 35,
    margin: 5,
  },
  header: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  alertButtonTextOff: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'center',
    textTransform: 'capitalize',
    color: '#E03174',
    fontFamily: 'FuturaPT-Book',
  },
  alertButtonTextOn: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'center',
    textTransform: 'capitalize',
    color: '#C3BCBC',
    fontFamily: 'FuturaPT-Book',
  },
  headerText: {
    color: 'gray',
    fontSize: 35,
    alignSelf: 'center',
    marginTop: '1%',
    textTransform: 'capitalize',
    marginRight: '25%',
    marginLeft: 'auto',
  },
  heading: {
    backgroundColor: '#FAFAFA',
    marginTop: '3%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headingText: {
    width: _defz.width / 1.3,
    flexDirection: 'column',
    flex: 3,
  },
  headingButton: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: _defz.height / 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    elevation: 5,
  },
});
