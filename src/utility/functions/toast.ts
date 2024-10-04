import Snackbar from 'react-native-snackbar';

export const Toast = (text: string, backgroundColor?: string) => {
  return Snackbar.show({
    text: text,
    backgroundColor: backgroundColor,
    marginBottom: 10,
  });
};
