import {StyleSheet} from 'react-native';
let _defz = require('../../com/def');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#000',
  },
  heading: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 25,
    color: '#757575',
  },
  mainScrollView: {
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    position: 'relative',
    bottom: 30,
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerXbutton: {
    alignSelf: 'flex-end',
    marginTop: _defz.height / 50,
  },
  headerXIcon: {
    alignSelf: 'center',
    color: 'silver',
    fontSize: 35,
    margin: 5,
  },
  title: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 30,
  },
  headingRow: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 25,
    color: '#707070',
  },
  scrollViewH: {
    width: '100%',
    marginTop: _defz.height / 25,
  },
  card: {
    backgroundColor: '#fff',
    width: _defz.width / 3,
    height: 200,
    borderRadius: 10,
    elevation: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardNumber: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 35,
    color: '#000',
  },
  cardBorrowItemsText: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    color: '#707070',
  },
  cardInfo: {
    marginTop: 10,
  },
  cardInfoTextTop: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 14,
    color: '#08D18C',
  },
  cardInfoTextBottom: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 13,
    color: '#E03174',
  },
  counter: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  counterButtonPlus: {
    fontSize: 45,
    color: '#707070',
  },
  counterButtonMines: {
    fontSize: 75,
    marginBottom: 10,
    color: '#707070',
  },
  count: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 25,
    color: '#707070',
  },
  tip: {
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: _defz.width / 30,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tipHead: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 16,
    color: '#707070',
  },
  tipTerms: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 16,
    color: '#3D80F2',
  },
  borrowBG: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  BorrowBGItems: {
    flexDirection: 'row',
  },
  BorrowBGItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BorrowBGItemText: {
    position: 'relative',
    bottom: 20,
    borderTopColor: '#C3BCBC',
    borderTopWidth: 1,
    fontSize: 25,
    width: _defz.width / 20,
    textAlign: 'center',
    color: '#707070',
    fontFamily: 'FuturaPT-Book',
  },
  noReturnsText: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 40,
    color: '#707070',
  },
  forwardButton: {
    alignSelf: 'center',
  },
  editButton: {
    alignSelf: 'center',
    backgroundColor: '#C3BCBC',
    borderRadius: 20,
    paddingHorizontal: 30,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  editButtonText: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 14,
    color: '#FFF',
  },
  main: {
    backgroundColor: '#FAFAFA',
    padding: 20,
    width: '100%',
  },
  returned: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
  },
  returnedText: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 20,
    color: '#FFF',
    flex: 1,
  },
  returnedItems: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  returnedItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnedBag: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 25,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 500,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleNumber: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 20,
  },
  returnedItemText: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 20,
    color: '#FFF',
  },
  borrowedNumber: {
    fontFamily: 'FuturaPT-Medium',
    fontSize: 35,
    color: '#000000',
    fontWeight: '100',
  },
});
