import {StyleSheet} from 'react-native';
let _defz = require('../../com/def');

export const styles = StyleSheet.create({
  container: {
    fontFamily: 'FuturaPT-Medium',
    width: _defz.width,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  bag: {
    height: '70%',
    borderRadius: 10,
    borderColor: '#C3BCBC',
    borderWidth: 1,
    elevation: 4,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
    marginTop: '5%',
  },
  bagHeading: {
    width: '100%',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  bagHeadingTitle: {
    color: '#3D80F2',
    fontFamily: 'FuturaPT-Medium',
    fontSize: 25,
  },
  pagination: {
    width: 20,
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C3BCBC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  paginationActive: {
    width: 20,
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3D80F2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  paginationSmallBox: {
    width: 10,
    height: 4,
    backgroundColor: '#C3BCBC',
    borderWidth: 1,
    borderColor: '#C3BCBC',
    borderRadius: 10,
  },
  paginationSmallBoxActive: {
    width: 10,
    height: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3D80F2',
    borderRadius: 10,
  },
  paginationText: {
    color: '#C3BCBC',
    fontFamily: 'FuturaPT-Medium',
  },
  paginationTextActive: {
    color: '#3D80F2',
    fontFamily: 'FuturaPT-Medium',
  },
  headingBottom: {
    width: '100%',
  },
  optionBackground: {
    width: '100%',
    height: _defz.height / 9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRow: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionRow2: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '-2%',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentHeading: {
    width: '100%',
    backgroundColor: '#707070',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  contentHeadingLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeadingLeftText: {
    color: '#fff',
    marginLeft: '3%',
    fontSize: 14,
    fontFamily: 'FuturaPT-Book',
  },
  contentHeadingRigthText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'FuturaPT-Medium',
  },
  bagCard: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  bagCardBg: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
    backgroundColor: '#fafafa',
  },
  bagCardRigth: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  counter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F0F0F0',
    elevation: 5,
    width: _defz.width / 4.5,
    height: _defz.height / 25,
    borderRadius: 10,
  },
  counterButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: _defz.width / 15,
    height: _defz.height / 25,
  },
  counterButtonText: {
    fontSize: 20,
  },
  cardImage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C3BCBC',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: _defz.width / 8,
    height: _defz.height / 14,
    marginRight: '4%',
  },
  scrollView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: _defz.height / 2.5,
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: _defz.height / 40,
  },
  paginationContainerCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
  },
  checkOutButton: {
    width: '90%',
    backgroundColor: '#3D80F2',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: _defz.height / 45,
    marginBottom: _defz.height / 45,
  },
  checkOutButtonText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'FuturaPT-Medium',
  },
  title: {
    fontSize: 17,
    fontFamily: 'FuturaPT-Book',
  },
  subTtitle: {
    color: '#F79F28',
    fontFamily: 'FuturaPT-Book',
    fontSize: 15,
  },
  paginationButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  headingText: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 18,
    fontWeight: '100',
    color: '#707070',
  },
  quantity: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 15,
  },
});
