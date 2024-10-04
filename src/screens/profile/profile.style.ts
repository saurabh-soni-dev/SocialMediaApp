import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 20,
  },
  profileView: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  infoView: {
    flex: 1,
    marginLeft: 20,
  },
  nameText: {
    fontSize: 30,
    fontWeight: '500',
    color: color.black,
    textTransform: 'capitalize',

  },
  bioText: {
    fontSize: 16,
    fontWeight: '500',
    color: color.darkGray,
    textTransform: 'capitalize',
  },
});
