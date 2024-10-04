import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  formContainer: {
    marginTop: 50,
    marginHorizontal: 5,
  },
  text: {
    marginTop: 25,
    fontSize: 28,
    color: 'darkblue',
    fontWeight: '600',
    textAlign: 'center',
  },
  subText: {
    marginHorizontal: 22,
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 0.5,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: 'black',
    fontSize: 14,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    height: 50,
    width: '100%',
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
