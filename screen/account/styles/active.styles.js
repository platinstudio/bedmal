import {StyleSheet} from 'react-native';
let _defz = require('../../com/def');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
  },
  activeTitle: {
    fontSize: 40,
    color: '#707070',
    alignSelf: 'center',
    fontFamily: 'FuturaPT-Medium',
    marginTop: _defz.height / 20,
  },
  tab: {
    width: '70%',
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 30,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3D80F2',
  },
  activeTabText: {
    color: '#3D80F2',
  },
  card: {
    marginTop: _defz.height / 50,
    minHeight: _defz.height / 10,
  },
  cardTitle: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 18,
    color: '#707070',
  },
  cardFooter: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 18,
    color: '#C3BCBC',
  },
  cardLeft: {
    flex: 2,
    alignItems: 'center',
  },
  cardRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  status: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: _defz.width / 4,
  },
  circleOrange: {
    width: 40,
    height: 40,
    backgroundColor: '#F79F28',
    borderRadius: 500,
    marginBottom: _defz.height / 100,
  },
  circleGreen: {
    width: 40,
    height: 40,
    backgroundColor: '#08D18C',
    borderRadius: 500,
    marginBottom: _defz.height / 100,
  },
  statusText: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 20,
    color: '#707070',
  },
  timeCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 500,
    marginBottom: _defz.height / 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  timeCircleText: {
    color: '#707070',
    fontFamily: 'FuturaPT-Book',
    fontSize: 25,
  },
  timeCircleWarn: {
    width: 40,
    height: 40,
    backgroundColor: '#E03174',
    borderRadius: 500,
    marginBottom: _defz.height / 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  timeCircleWarnText: {
    color: '#fff',
    fontFamily: 'FuturaPT-Book',
    fontSize: 25,
  },
  cardLeftText: {
    fontFamily: 'FuturaPT-Book',
    fontSize: 16,
    color: '#707070',
  },
});
