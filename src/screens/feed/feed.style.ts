import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 28,
    color: color.black,
    fontWeight: '800',
  },
  createPostView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createPostBtn: {
    marginRight: 15,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: color.borderColorOne,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createPostText: {
    fontSize: 25,
    color: color.black,
    fontWeight: '600',
  },
  profileImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  listView: {
    flex: 1,
    marginTop: 20,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
